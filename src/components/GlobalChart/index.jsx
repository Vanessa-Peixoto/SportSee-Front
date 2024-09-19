import CardInfo from "../CardInfo";
import calorieIcon from '../../assets/images/calories-icon.png';
import proteinIcon from '../../assets/images/protein-icon.png';
import glucideIcon from '../../assets/images/carbs-icon.png';
import lipideIcon from '../../assets/images/fat-icon.png';
import PieChartGoal from "../PieChart";
import LineChartSession from "../LineChart";
import RadarChartPerformance from "../RadarChart";
import BarChartActivity from "../BarChart";

import { useEffect, useState } from 'react';
import {
  fetchUserActivity,
    fetchUserData, fetchUserPerformance,
    fetchUserSession
} from '../../services/apiService.js';


function GlobalChart() {
    const [user, setUser] = useState(null);
  const [userPerformance, setPerformance] = useState({
    data: [],  // On initialise avec un tableau vide
    kind: {}   // On initialise avec un objet vide
  });
  const [userActivity, setActivity] = useState({
    sessions: []
  });
  const [userSession, setSession] = useState({
    sessions: []
  });

  useEffect(() => {
    const userId = 18; // Exemple avec un ID utilisateur

     // Encapsulation dans une promesse avec async/await
     const loadData = async () => {
      try {
        const userData = await fetchUserData(userId);
        setUser(userData);

        const userDataPerformance = await fetchUserPerformance(userId);
        setPerformance(userDataPerformance);

        const userDataActivity = await fetchUserActivity(userId);
        setActivity(userDataActivity);

        const userDataSession = await fetchUserSession(userId);
        setSession(userDataSession);


        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
        }
    };

    loadData();
},[]);

if (!user) {
    return <div>Loading...</div>;
}
return(
<div className="container-main-chart">

<div>
  <h1>Bonjour <span className="user-name">{user.userInfos.firstName}</span></h1>
  <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
</div>

<div className="container-chart">

  <div>
    <BarChartActivity data={userActivity.sessions}/>
    <section className="chart-item">
      <LineChartSession data={userSession.sessions}/>
      <RadarChartPerformance data={userPerformance.data} kind={userPerformance.kind}/>
      <PieChartGoal score={user.score}/>
    </section>
  </div>

  <section className="container-card-info">
  <CardInfo icon={calorieIcon} value={user.keyData.calorieCount + 'kCal'} category='Calories'/>
  <CardInfo icon={proteinIcon} value={user.keyData.proteinCount + 'g'} category='Proteines'/>
  <CardInfo icon={glucideIcon} value={user.keyData.carbohydrateCount + 'g'} category='Glucides'/>
  <CardInfo icon={lipideIcon} value={user.keyData.lipidCount + 'g'} category='Lipides'/>
  </section>

</div>

</div>
)
    

}

export default GlobalChart;

