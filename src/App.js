import CardInfo from "./components/CardInfo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import calorieIcon from './assets/images/calories-icon.png';
import proteinIcon from './assets/images/protein-icon.png';
import glucideIcon from './assets/images/carbs-icon.png';
import lipideIcon from './assets/images/fat-icon.png';

import React, { useEffect, useState } from 'react';
import {
    fetchUserData, fetchUserPerformance
} from '../src/services/apiService';
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import RadarChart from "./components/RadarChart";

import './style.scss';


function App() {

  const [user, setUser] = useState(null);
  const [userPerformance, setPerformance] = useState({
    data: [],  // On initialise avec un tableau vide
    kind: {}   // On initialise avec un objet vide
});

  useEffect(() => {
    const userId = 12; // Exemple avec un ID utilisateur

     // Encapsulation dans une promesse avec async/await
     const loadData = async () => {
      try {
        const userData = await fetchUserData(userId);
        setUser(userData);

        const userDataPerformance = await fetchUserPerformance(userId);
        setPerformance(userDataPerformance);


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
    
    <div>
      <Header/>
      
      <main>

        <Sidebar/>

        <div className="container-main">
          <section>
            <h1>Bonjour <span className="user-name">{user.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </section>

          <div>
            <section>
              <LineChart/>
              <RadarChart data={userPerformance.data} kind={userPerformance.kind}/>
              <PieChart score={user.score}/>
            </section>

            <section>
            <CardInfo icon={calorieIcon} value={user.keyData.calorieCount + 'kCal'} category='Calories'/>
            <CardInfo icon={proteinIcon} value={user.keyData.proteinCount + 'g'} category='Proteines'/>
            <CardInfo icon={glucideIcon} value={user.keyData.carbohydrateCount + 'g'} category='Glucides'/>
            <CardInfo icon={lipideIcon} value={user.keyData.lipidCount + 'g'} category='Lipides'/>

            </section>

          </div>

        </div>

        
      </main>
      
        





    </div>

  )

}

export default App;

