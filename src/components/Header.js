import { Link } from "react-router-dom";
import { LOGO_IMG_URL } from "../utils/Config";

const Header = () => {
    return (
        <div className="header">
            <img className="logo" alt="Logo of eatnow" src={LOGO_IMG_URL}></img>
            <ul className="navbar-list">
                <li className="navbar-items"><Link to="/">Home</Link></li>
                <li className="navbar-items"><Link to="/dining">Dining</Link></li>
                <li className="navbar-items"><Link to="/about">About</Link></li>
                <li className="navbar-items"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;