import React from 'react';
import PlayerCard from './PlayerCard';

function AddPlayers({ league, nonPlayers, onAddPlayer }){

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