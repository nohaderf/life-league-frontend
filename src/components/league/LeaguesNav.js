import React, { useState,useEffect } from 'react';
import { NavLink } from "react-router-dom";

function LeaguesNav(){
    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/leagues`)
        .then(r => r.json())
        .then(setLeagues)
    }, []) 

    // const leagueList = leagues.map(league => {
    //     return (
    //         <li>
    //             <NavLink exact to="/leagues/${league.id}">
    //                 <p className="league-nav-element">{league.name}</p> 
    //             </NavLink>
    //         </li>
    //     )
    // )}

    return(
        <nav className="league-nav">
            <ul>
                <li>
                    <NavLink exact to="/leagues/4">
                    <p className="league-nav-element">League 1</p> 
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/leagues/1">
                        <p className="league-nav-element">League 2</p>   
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/leagues">
                        <p className="league-nav-element">League 3</p>  
                    </NavLink>
                </li> 
            </ul>
        </nav>
    )
}

export default LeaguesNav;