import React, { useState, useEffect } from 'react';
import LeaguesNav from './LeaguesNav';
import TaskRoster from './tasks/TaskRoster';
import LeagueDetails from './LeagueDetails';
import ScrollToTop from '../ScrollToTop';

function LeaguePage({ leagues, currentUser, friends, addNewLeague, onDeleteLeague }){
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}tasks`)
        .then(r => r.json())
        .then(taskData => {
            setTasks(taskData) // taskData= all users tasks
            // console.log(taskData)
        })
    }, [])

    const userIdArr = tasks.map(task => {
        if (task.user.username === "nohaderf") {
            return task.user.id
        }
    })
 
    const filterUserId = userIdArr.filter(id => id !== undefined)
    const userId = filterUserId[0]

    const currentUserTasks = tasks.filter(task => task.user.username === "nohaderf")

    function handleAddTask(taskObj){
        setTasks([...tasks, taskObj])
    }

    function handleDeleteTask(deleteTask){
        const removedTask = tasks.filter(task => task.id !== deleteTask.id)
        setTasks(removedTask)
    }

    // function handleAddPoints(newTaskData){
    //     setPoints(newTaskData.points)
    // }

    return(
        <div className= "main-div">
            <LeaguesNav leagues={leagues} addNewLeague={addNewLeague} />
            <div className="league-container">
                <div className="tasks-div">
                    <TaskRoster 
                        userId={userId} 
                        tasks={currentUserTasks}
                        handleAddTask={handleAddTask} 
                        handleDeleteTask={handleDeleteTask} />
                </div>
                <div className="details-div">
                    <LeagueDetails leagues={leagues} currentUser={currentUser} friends={friends} onDelete={onDeleteLeague} />
                </div>
                <ScrollToTop />
            </div>
        </div>
    )
}

export default LeaguePage;