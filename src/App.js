import CardInfo from "./components/CardInfo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import calorieIcon from './assets/images/calories-icon.png';
import proteinIcon from './assets/images/protein-icon.png';
import glucideIcon from './assets/images/carbs-icon.png';
import lipideIcon from './assets/images/fat-icon.png';

import React, { useEffect, useState } from 'react';
import {
    fetchUserData,
} from '../src/services/apiService';
import PieChart from "./components/PieChart";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = 12; // Exemple avec un ID utilisateur

    const loadData = async () => {
        try {
          const userData = await fetchUserData(userId);
          setUser(userData);

        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
        }
    };

    loadData();
},);

if (!user) {
    return <div>Loading...</div>;
}


  return(
    
    <div>
      <Header/>
      
      <main>

        <Sidebar/>

        <div>
        <section>
          <h1>Bonjour {user.userInfos.firstName}....</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>

        <div>
          <section>
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

