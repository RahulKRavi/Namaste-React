import { Link } from "react-router-dom";
import { LOGO_IMG_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContex";
import { useSelector } from "react-redux";

const Header = () => {
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items)
    return (
        <div className="flex justify-between bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <img className="h-20" alt="Logo of eatnow" src={LOGO_IMG_URL}></img>
            <ul className="flex m-3">
                <li className="p-3 text-gray-50"><Link to="/">Home</Link></li>
                <li className="p-3 text-gray-50"><Link to="/dining">Dining</Link></li>
                <li className="p-3 text-gray-50"><Link to="/about">About</Link></li>
                <li className="p-3 text-gray-50"><Link to="/contact">Contact</Link></li>
                <li className="p-3 text-gray-50"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                <li className="p-3 text-gray-50">{user.name}</li>

            </ul>
        </div>
    )
}

export default Header;