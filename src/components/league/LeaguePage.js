import React from 'react';
import LeaguesNav from './LeaguesNav';
import TaskRoster from './tasks/TaskRoster';
import LeagueDetails from './LeagueDetails';

function LeaguePage({ leagues, currentUser, friends, addNewLeague }){

    return(
        <div className= "main-div">
            <LeaguesNav leagues={leagues} addNewLeague={addNewLeague} />
            <div className="league-container">
                <div className="tasks-div">
                    <h1>Goal Roster</h1>
                    <TaskRoster />
                </div>
                <div className="details-div">
                    <LeagueDetails leagues={leagues} currentUser={currentUser} friends={friends} />
                </div>
            </div>
        </div>
    )
}

export default LeaguePage;