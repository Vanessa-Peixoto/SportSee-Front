import icone1 from "../../assets/images/icon1.png";
import icone2 from "../../assets/images/icon2.png";
import icone3 from "../../assets/images/icon3.png";
import icone4 from "../../assets/images/icon4.png";
import "./style.scss";

function Sidebar() {
  return (
    <aside>
      <div className="wrapper-icon">
        <img src={icone1} alt="icone 1" className="icon" />
        <img src={icone2} alt="icone 2" className="icon" />
        <img src={icone3} alt="icone 3" className="icon" />
        <img src={icone4} alt="icone 4" className="icon" />
      </div>
      <div className="">
        <p>Copyright, SportSee 2020</p>
      </div>
    </aside>
  );
}

export default Sidebar;
