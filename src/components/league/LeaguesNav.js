import React, { useState } from 'react';
import NewLeague from './NewLeague';

function LeaguesNav({ leagues, addNewLeague }){
    const [leagueForm, setLeagueForm] = useState(false)

    function newLeagueForm(){
        setLeagueForm(!leagueForm)
    }

    const leagueLi = leagues.map(league => {
        return (
            <li>
                <a className="anchor" href={`/leagues/#${league.id}`}>
                    <p className="league-nav-element">{league.name}</p> 
                </a>
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
        { leagueForm ? <NewLeague addNewLeague={addNewLeague} exitForm={newLeagueForm} closeForm={setLeagueForm} /> : null }
        </>
    )
}

export default LeaguesNav;