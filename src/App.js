import BtnKeyData from "./components/BtnKeyData";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import calorieIcon from './assets/images/calories-icon.png';
import proteinIcon from './assets/images/protein-icon.png';
import glucideIcon from './assets/images/carbs-icon.png';
import lipideIcon from './assets/images/fat-icon.png';


function App() {
  return(
    
    <div>
      <Header/>
      
      <main>

        <Sidebar/>

        <div>
        <section>
          <h1>Bonjour....</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>

        <div>
          <section></section>

          <section>
          <BtnKeyData icon={calorieIcon} value='190kcl' category='Calories'/>
          <BtnKeyData icon={proteinIcon} value='190kcl' category='Proteines'/>
          <BtnKeyData icon={glucideIcon} value='190kcl' category='Glucides'/>
          <BtnKeyData icon={lipideIcon} value='190kcl' category='Lipides'/>

          </section>

        </div>

        </div>




        
        
      </main>
      
        





    </div>

  )

}

export default App;

