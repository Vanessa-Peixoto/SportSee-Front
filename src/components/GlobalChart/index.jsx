import CardInfo from "../CardInfo";
import calorieIcon from "../../assets/images/calories-icon.png";
import proteinIcon from "../../assets/images/protein-icon.png";
import glucideIcon from "../../assets/images/carbs-icon.png";
import lipideIcon from "../../assets/images/fat-icon.png";
import PieChartGoal from "../PieChart";
import LineChartSession from "../LineChart";
import RadarChartPerformance from "../RadarChart";
import BarChartActivity from "../BarChart";
import Error from "../Error";
import "./style.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchUserActivity,
  fetchUserData,
  fetchUserPerformance,
  fetchUserSession,
} from "../../services/apiService.js";

/**
 * @description Bring together all the charts for the dashboard page
 * @component
 * @returns Personalized dashboard for user with multiple charts
 */
function GlobalChart() {

  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [userPerformance, setPerformance] = useState({data: [], kind: {}});
  const [userActivity, setActivity] = useState({sessions: []});
  const [userSession, setSession] = useState({sessions: []});
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const loadData = async () => {
      try {
        const [userData, userDataPerformance, userDataActivity, userDataSession] = await Promise.all([
          fetchUserData(userId),
          fetchUserPerformance(userId),
          fetchUserActivity(userId),
          fetchUserSession(userId),
        ]);

        setUser(userData);
        setPerformance(userDataPerformance);
        setActivity(userDataActivity);
        setSession(userDataSession);

      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
        setError('Oops, une erreur est intervenue !')
      }
    };

    loadData();
  }, [userId]);

  if (!user || !userPerformance || !userActivity || !userSession) {
    return  <Error errorMessage={error} />;
  }
  return (
    <div className="container-main-chart">
      <div>
        <h1>
          Bonjour <span className="user-name">{user.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className="container-chart">
        <div className="div-container-chart">
          <BarChartActivity data={userActivity.sessions} />
          <section className="chart-item">
            <LineChartSession data={userSession.sessions} />
            <RadarChartPerformance
              data={userPerformance.data}
              kind={userPerformance.kind}
            />
            <PieChartGoal score={user.score} />
          </section>
        </div>

        <section className="container-card-info">
          <CardInfo
            icon={calorieIcon}
            value={user.keyData.calorieCount.toLocaleString("en-US") + "kCal"}
            category="Calories"
          />
          <CardInfo
            icon={proteinIcon}
            value={user.keyData.proteinCount + "g"}
            category="Proteines"
          />
          <CardInfo
            icon={glucideIcon}
            value={user.keyData.carbohydrateCount + "g"}
            category="Glucides"
          />
          <CardInfo
            icon={lipideIcon}
            value={user.keyData.lipidCount + "g"}
            category="Lipides"
          />
        </section>
      </div>
    </div>
  );
}

export default GlobalChart;
