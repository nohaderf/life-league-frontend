import React from 'react';
import BreakdownStats from './BreakdownStats';

function Breakdown({ league }){

    // have an array of userObjs from league.users
    let leaguePlayers = league.users

    // want to randomly select a userObj without repeating from array
    // function randomMatchUp(){

    const playerBreakdown = league.users.map(user => {
        return <BreakdownStats key={user.id} user={user} />
    })


    return (
        <>
        <div className="league-header-div">
            <hr></hr>
            <h1>Breakdown</h1>
            <hr></hr>
        </div>
        <div className="breakdown-div">
            <table className="breakdown-table">
                <tbody>
                    <tr>
                        <th className="breakdown-header">Player</th>
                        <th className="breakdown-header">Goal</th>
                        <th className="breakdown-header">Category</th>
                        <th className="breakdown-header">Points Earned</th>
                    </tr>
                    {playerBreakdown}
                </tbody>
            </table>
        </div>
        </>

    )
}

export default Breakdown;