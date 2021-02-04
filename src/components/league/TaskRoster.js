import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TaskRoster(){
    const [league, setLeague] = useState(null)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/leagues/4`)
        .then(r => r.json())
        .then(leagueData => {
            console.log(leagueData.users)
            // setLeague(leagueData)
            // setTasks(leagueData.)
        })
    }, [])

    return(
        // <div className= "main-div">
        //     <div className="task-div">
        //         <div className="task-list-div">
        //             <h1>Task Roster</h1>
        //             Hello World!
        //         </div>
        //         <div className="friends-profile-div">
        //             { showForm ? <FindFriend users={users} onAddFriend={onAddFriend} /> : 
        //             <p>Select people's names to preview their profile. </p> }
                    
        //             {/* <Profile /> */}
        //         </div>
        //     </div>
            
        // </div>
        <div></div>
    )
}

export default TaskRoster;