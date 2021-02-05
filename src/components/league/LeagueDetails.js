import React, { useState, useEffect } from 'react';
// import InnerNavBar from './InnerNavBar';
// import { NavLink } from 'react-router-dom';
import Standings from './Standings';
import MatchUps from './MatchUps';

function LeagueDetails(){
    const [showStandings, setShowStandings] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const [leagueData, setLeagueData] = useState([])
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}leagues/6`)
        .then(r => r.json())
        .then(data => {
            setLeagueData(data)
            setIsLoaded(true)
        })
    }, [])
    
    function handleShowMatchUps(){
        setShowStandings(false)
    }

    function handleShowStandings(){
        setShowStandings(true)
    }

    if (!isLoaded) return <h1>Loading...</h1>

    return (
        <div>
            <nav className="inner-league-nav">
                <ul>
                    <li>
                        <p onClick={handleShowStandings} className="standings">Standings</p> 
                    </li>
                    <li>
                        <p onClick={handleShowMatchUps} className="matchups">Matchups</p>   
                    </li>
                </ul>
            </nav>
             <h1>{leagueData.name}</h1>
             <p className="league-details">Wager: {leagueData.notes}</p>
             
            { showStandings? <Standings league={leagueData} /> : <MatchUps league={leagueData} /> }
        </div>
    )
}

export default LeagueDetails;