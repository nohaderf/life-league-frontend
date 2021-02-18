import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png';
import { useSelector } from 'react-redux';

function NavBar({ currentUser, login, handleLogout }){
    const [navBar, setNavBar] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    
    const imageUrl = useSelector(state => state.imageUrl)

    function changeBackground() {
        if (window.scrollY >= 20) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    function handleDropDown(){
        setShowDropDown(!showDropDown)
    }

    window.onclick = function(e) {
        if (!e.target.matches('.drop-btn')) {
            setShowDropDown(false)
        }
    }

    return (
        <nav className={navBar ? "nav-bar active" : "nav-bar"}>
            <div>
                <div className="drop-down-profile">
                {/* <NavLink exact to="/profile"><img className="user-thumbnail" src={currentUser.image_url}></img></NavLink> */}
                {/* <NavLink exact to="/profile"><img className="user-thumbnail" src={imageUrl}></img></NavLink> */}
                    <button className="drop-btn" onClick={handleDropDown}>
                        Hello, {currentUser.first_name}
                        <i className="fa fa-caret-down"></i>
                    </button>
                    { showDropDown ? <div className="dropdown-content">
                        <NavLink exact to="/profile">Profile</NavLink>
                        <NavLink exact to="/" onClick={handleLogout}>Logout</NavLink>
                    </div> : null }
                </div>

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
                        <NavLink to="/leagues">
                            <p className="nav-bar-element">Leagues</p>  
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink exact to="/friends">
                        <p className="nav-bar-element">Friends</p>  
                        </NavLink>
                    </li>
                
                </ul>
             
            </div>
        </nav>
    )
}

export default NavBar;