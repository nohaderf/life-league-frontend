import React from 'react';
import LeagueCard from './LeagueCard';

function LeagueDetails({ friends, leagues, onDelete }){

    const leagueCard = leagues.map(league => {
        return <LeagueCard key={league.id} league={league} friends={friends} onDeleteClick={onDelete} />
    })

    return (
        <div>
            {leagueCard}
        </div>
    )
}

export default LeagueDetails;