import React from 'react';
import PlayerStats from './PlayerStats';

function Standings({ league }){

    const playerStats = league.users.map (user => {
        return <PlayerStats key={user.id} user={user} />
    })

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
                    <td className="standings-header">Player</td>
                    <td className="standings-header">Total Points</td>
                    <td className="standings-header">Rank</td>
                </tr>
                {playerStats}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Standings;