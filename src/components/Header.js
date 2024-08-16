import { Link } from "react-router-dom";
import { LOGO_IMG_URL } from "../utils/Config";

const Header = () => {
    return (
        <div className="flex justify-between bg-zinc-900">
            <img className="h-11" alt="Logo of eatnow" src={LOGO_IMG_URL}></img>
            <ul className="flex m-3">
                <li className="p-3"><Link to="/">Home</Link></li>
                <li className="p-3"><Link to="/dining">Dining</Link></li>
                <li className="p-3"><Link to="/about">About</Link></li>
                <li className="p-3"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;