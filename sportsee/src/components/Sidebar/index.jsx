import icone1 from '../../assets/images/icon1.png';
import icone2 from '../../assets/images/icon2.png';
import icone3 from '../../assets/images/icon3.png';
import icone4 from '../../assets/images/icon4.png';

function Sidebar() {
    return(
        <div>
            <div>
                <img src={icone1} alt="icone 1" />
                <img src={icone2} alt="icone 2" />
                <img src={icone3} alt="icone 3" />
                <img src={icone4} alt="icone 4" />
            </div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Sidebar;