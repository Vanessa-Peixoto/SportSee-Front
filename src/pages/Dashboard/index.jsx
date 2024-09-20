import GlobalChart from "../../components/GlobalChart";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import './style.scss';

function Dashboard() {
  return (
    <>
      <Header />

      <main className="wrap-container">
        <Sidebar />
        <GlobalChart />
      </main>
    </>
  );
}
export default Dashboard;