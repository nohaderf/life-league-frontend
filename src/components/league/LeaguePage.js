import React from 'react';
import LeaguesNav from './LeaguesNav';
import TaskRoster from './TaskRoster';
import LeagueDetails from './LeagueDetails';

function LeaguePage(){
    return(

        <div className= "main-div">
            <LeaguesNav />
            <div className="task-div">
                <div className="task-list-div">
                    <h1>Task Roster</h1>
                    Hello World!
                    <TaskRoster />
                </div>
                <div className="league-details-div">
                    <LeagueDetails />
                </div>
            </div>
        </div>
    )
}

export default LeaguePage;