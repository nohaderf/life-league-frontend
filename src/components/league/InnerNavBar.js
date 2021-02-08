import React from 'react';
import { NavLink } from 'react-router-dom';

function InnerNavBar(){
    return (
        <nav className="inner-league-nav">
        <ul>
            <li>
                <NavLink exact to="/leagues/4">
                <p className="standings">Standings</p> 
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/leagues/1">
                    <p className="breakdown">Breakdown</p>   
                </NavLink>
            </li>
            {/* <li>
                <NavLink exact to="/leagues/1">
                    <p className="matchups">Matchups</p>   
                </NavLink>
            </li> */}
        </ul>
    </nav>
    )
}

export default InnerNavBar;