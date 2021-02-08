import React from 'react';
import MatchUpStats from './MatchUpStats';

function MatchUps({ league }){

    // have an array of userObjs from league.users
    let leaguePlayers = league.users

    // want to randomly select a userObj without repeating from array
    // function randomMatchUp(){

    // }
    return (
        <>
        <div className="league-header-div">
            <hr></hr>
            <h1>Match Ups</h1>
            <hr></hr>
        </div>
        <div className="standings-div">
            <table className="standings-table">
                <tbody>
                    <tr>
                    <td className="standings-header">Player</td>
                    <td className="standings-header">Opponent</td>
                </tr>
                </tbody>
            </table>
        </div>
        </>

    )
}

export default MatchUps;