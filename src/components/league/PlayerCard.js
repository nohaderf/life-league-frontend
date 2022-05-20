import React from 'react';

function PlayerCard({ nonPlayer, league, onAddPlayer }){
    const { id, first_name, last_name } = nonPlayer
    const last_initial = last_name.charAt(0)
    const leagueId = league.id

    function handleAddPlayer(){
        console.log("clicked")
        const userLeagueData = {
            user_id: id,    
            league_id: leagueId
        }

        fetch(`${process.env.REACT_APP_API_BASE_URL}user_leagues`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userLeagueData)
        })
        .then(r => r.json())
        .then(onAddPlayer)
    }

    return (
        <div className="add-player-league">
            <p className="player"> <button onClick={handleAddPlayer}><i className="fas fa-plus-circle"></i> {first_name} {last_initial}.</button></p>
        </div>
    )
}

export default PlayerCard;