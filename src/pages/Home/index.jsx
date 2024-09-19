import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import avatarKarl from "../../assets/images/avatar-karl.jpg";
import avatarCecilia from "../../assets/images/avatar-cecilia.jpg";
import './style.scss';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div className="container-link">
            <Link to="/user/12">
                <img src={avatarKarl} alt="avatar" />
                <p>Dashboard Karl</p>
            </Link>
            <Link to="/user/18">
                <img src={avatarCecilia} alt="avatar" />
                <p>Dashboard Cecilia</p>
            </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
