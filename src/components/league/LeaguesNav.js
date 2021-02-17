import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewLeague from './NewLeague';

function LeaguesNav({ leagues, addNewLeague }){
    const [leagueForm, setLeagueForm] = useState(false)

    function newLeagueForm(){
        setLeagueForm(!leagueForm)
    }


    const leagueLi = leagues.map(league => {
        return (
            <li onClick={(e) => {
                e.preventDefault()
               window.location.replace(`#${league.id}`)
                }
            }>
                    <p className="league-nav-element">{league.name}</p>
            </li>
        )
    })

    return(
        <>
        <nav className="league-nav">
            <ul>
                {leagueLi}
            </ul>
            <button onClick={newLeagueForm} className="new-league-btn"><i className="fas fa-plus-circle"></i> New League</button>
        </nav>
        { leagueForm ? <NewLeague addNewLeague={addNewLeague} exitForm={newLeagueForm} closeForm={setLeagueForm} /> : null }
        </>
    )
}

export default LeaguesNav;