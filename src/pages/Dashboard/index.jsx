import GlobalChart from "../../components/GlobalChart";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Header />

      <main>
        <Sidebar />
        <GlobalChart />
      </main>
    </>
  );
}
export default Dashboard;