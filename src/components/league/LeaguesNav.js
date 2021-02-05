import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NewLeague from './NewLeague';

function LeaguesNav(){
    const [leagues, setLeagues] = useState([])
    const [leagueForm, setLeagueForm] = useState(false)

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

    function newLeagueForm(){
        setLeagueForm(!leagueForm)
    }

    function handleNewLeague(newLeague){
        const newLeagueList = leagues.map(league => league.name)
        setLeagues(newLeagueList)
    }

    return(
        <>
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
            <span onClick={newLeagueForm} className="league-nav-element"><i className="fas fa-plus-circle"></i> New League</span>
        </nav>
        { leagueForm ? <NewLeague addNewLeague={handleNewLeague} exitForm={newLeagueForm} /> : null }
        </>
    )
}

export default LeaguesNav;