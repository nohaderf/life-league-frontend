import React, { useContext, useState } from "react"
import { NavLink , useHistory} from "react-router-dom";
import logo from '../images/logo.png';

function NavBar(){
    const [navBar, setNavBar] = useState(false)
    // const [smallLogo, setSmallLogo] = useState(false)

    // const {loggedIn, toggle} = useContext(LoginContext)
    // const history = useHistory()

    function changeBackground() {
        if (window.scrollY >= 20) {
            setNavBar(true)
            // setSmallLogo(true)
        } else {
            setNavBar(false)
            // setSmallLogo(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    return (
        <nav className={navBar ? "nav-bar active" : "nav-bar"}>
            {/* <NavLink exact to="/">
                <img className={smallLogo ? "logo active" : "logo"} src={logo} alt="Life League" />
            </NavLink> */}
            {/* <p className="welcome-user">Hello, Freda</p> */}
            <NavLink exact to="/">
                <div className="nav-bar-element">
                    <img className="logo" src={logo} alt="Life League" />
                </div>
            </NavLink>
            <ul>
                <li>
                    <NavLink exact to="/">
                    <p className="nav-bar-element">About</p> 
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/rules">
                        <p className="nav-bar-element">Rules</p>   
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/leagues">
                        <p className="nav-bar-element">Leagues</p>  
                    </NavLink>
                </li> 
                <li>
                    <NavLink exact to="/friends">
                    <p className="nav-bar-element">Friends</p>  
                    </NavLink>
                </li>
                {/* {loggedIn ? headerLinksObj() : history.push(`/`)}          */}
            </ul>
            {/* <p className="login" onClick={toggle}>{loggedIn ? "LOGOUT" : "LOGIN"}</p> */}
        </nav>
    )
}

export default NavBar;