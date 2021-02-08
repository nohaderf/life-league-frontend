import React from 'react';
// import { useHistory } from 'react-router-dom';

function PlayerCard({ nonPlayer, league, onAddPlayer }){
    // const history = useHistory()
    const { id, first_name, last_name } = nonPlayer
    const last_initial = last_name.charAt(0)
    const leagueId = league.id

    // console.log(friendId)

    function handleAddPlayer(){
        console.log("clicked")
        const userLeagueData = {
            user_id: id,    
            league_id: leagueId
        }

        fetch(`http://localhost:3000/user_leagues`,{
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
            <p className="player">{first_name} {last_initial}.</p> <button onClick={handleAddPlayer}>Add to League</button>
        </div>
    )
}

export default PlayerCard;