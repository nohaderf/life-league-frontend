import React from 'react';
import LeaguesNav from './LeaguesNav';
import TaskRoster from './tasks/TaskRoster';
import LeagueDetails from './LeagueDetails';

function LeaguePage(){
    return(

        <div className= "main-div">
            <LeaguesNav />
            <div className="league-container">
                <div className="tasks-div">
                    <h1>Task Roster</h1>
                    <TaskRoster />
                </div>
                <div className="details-div">
                    <LeagueDetails />
                </div>
            </div>
        </div>
    )
}

export default LeaguePage;