import logo from '../../assets/images/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;