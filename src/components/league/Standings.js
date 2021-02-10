import React, { useState, useEffect } from 'react';
import PlayerStats from './PlayerStats';

function Standings({ league }){ 
    const [sortUsers, setSortUsers] = useState([])

    useEffect(() => {
        setSortUsers(league.users.sort((a,b) => b.total_points - a.total_points))
    }, [])

    const playerStats = sortUsers.map (user => {
        return <PlayerStats key={user.id} user={user} handleRanks={handleRanks} />
    })

    function handleRanks(userObj){
        setSortUsers(league.users.sort((a,b) => b.total_points - a.total_points))
    }


    return (
        <>
        <div className="league-header-div">
            <hr></hr>
            <h1>Standings</h1>
            <hr></hr>
        </div>
        <div className="standings-div">
            <table className="standings-table">
                <tbody>
                    <tr>
                        <th className="standings-header">Rank</th>
                        <th className="standings-header">Player</th>
                        <th className="standings-header">Total Points</th>    
                    </tr>
                    {playerStats}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Standings;