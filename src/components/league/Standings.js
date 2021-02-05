import React from 'react';
import PlayerStats from './PlayerStats';

function Standings({ league }){

    const playerStats = league.users.map (user => {
        return <PlayerStats key={user.id} user={user} />
    })

    console.log(league)

    return (
        <>
        <div className="league-header-div">
            <hr></hr>
            <h1>Standings</h1>
            <hr></hr>
        </div>
        <div className="standings-div">
            <table>
                <tbody>
                    <tr>
                    <td>Player</td>
                    <td>Total Points</td>
                    <td>Rank</td>
                </tr>
                {playerStats}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Standings;