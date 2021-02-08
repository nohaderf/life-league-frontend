import React from 'react';
import PlayerCard from './PlayerCard';

function AddPlayers({ league, nonPlayers, onAddPlayer }){

    
    //i have potential player IDs
    //with ids, now to grab user info again...

    // const friendIds = friends.map(friend => friend.id)
    // const potentialPlayerIds = friendIds.filter(id => notPlayers.includes(id))

    const playerCard = nonPlayers.map(nonPlayer => {
        return <PlayerCard key={nonPlayer.id} nonPlayer={nonPlayer} league={league} onAddPlayer={onAddPlayer} />
    })

    return (
        <div className="add-players-div">
           {playerCard}
        </div>
        
    )
}

export default AddPlayers;