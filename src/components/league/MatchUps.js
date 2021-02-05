import React from 'react';

function MatchUps({ league }){
    return (
        <>
        <div className="league-header-div">
            <hr></hr>
            <h1>Match Ups</h1>
            <hr></hr>
        </div>
        <div className="standings-div">
            <table>
                <tbody>
                    <tr>
                    <td>Player1</td>
                    <td>Player2</td>
                </tr>
                </tbody>
            </table>
        </div>
        </>

    )
}

export default MatchUps;