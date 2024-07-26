const Header = () => {
    return (
        <div className="header">
            <img className="logo" alt="Logo of eatnow" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/EatNow_logo.png"></img>
            <ul className="navbar-list">
                <li className="navbar-items">Home</li>
                <li className="navbar-items">Account</li>
                <li className="navbar-items">Cart</li>
            </ul>
        </div>
    )
}

export default Header;