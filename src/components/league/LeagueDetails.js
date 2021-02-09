import React from 'react';
// import InnerNavBar from './InnerNavBar';
// import { NavLink } from 'react-router-dom';
import LeagueCard from './LeagueCard';

function LeagueDetails({ currentUser, friends, leagues, onDelete }){

    const leagueCard = leagues.map(league => {
        return <LeagueCard key={league.id} league={league} currentUser={currentUser} friends={friends} onDeleteClick={onDelete} />
    })

    return (
        <div>
            {leagueCard}
        </div>
    )
}

export default LeagueDetails;