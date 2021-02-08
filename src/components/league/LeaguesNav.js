import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NewLeague from './NewLeague';

function LeaguesNav({ leagues, addNewLeague }){
    const [leagueForm, setLeagueForm] = useState(false)

    function newLeagueForm(){
        setLeagueForm(!leagueForm)
    }

    const leagueLi = leagues.map(league => {
        return (
            <li>
                <NavLink exact to={`/leagues/${league.id}`}>
                    <p className="league-nav-element">{league.name}</p> 
                </NavLink>
            </li>
        )
    })

    return(
        <>
        <nav className="league-nav">
            <ul>
                {leagueLi}
            </ul>
            <span onClick={newLeagueForm} className="league-nav-element"><i className="fas fa-plus-circle"></i> New League</span>
        </nav>
        { leagueForm ? <NewLeague addNewLeague={addNewLeague} exitForm={newLeagueForm} /> : null }
        </>
    )
}

export default LeaguesNav;