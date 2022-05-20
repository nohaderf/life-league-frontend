import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png';
// import svg from '../images/life_league_logo.svg';
// import Logo from './Logo';

function Header(){
    const [navBar, setNavBar] = useState(false)
    
    function changeBackground() {
        if (window.scrollY >= 20) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    return (
        <nav className={navBar ? "nav-bar active" : "nav-bar"}>
            <div>
                 <div className="drop-down-profile">
                    <NavLink exact to="/login">
                        <button>Login</button>
                    </NavLink>|
                    <NavLink exact to="/signup">
                        <button> Sign Up</button>
                    </NavLink>
            </div>
                <NavLink exact to="/">
                    <div className="nav-bar-element">
                        {/* <svg>
                            <use href="#svg"></use>
                        </svg> */}
                        {/* <Logo /> */}
                        <img className="logo" src={logo} alt="Life League" />
                    </div>
                    <h1 className="h1-life-league-nav">Life League</h1>
                </NavLink>
                
            </div> 
        </nav>
    )
}

export default Header;