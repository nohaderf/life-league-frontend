import React, { useState,useEffect } from 'react';
import TaskItem from './TaskItem';

function TaskRoster(){
    // const [users, setUsers] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/tasks`)
        .then(r => r.json())
        .then(setTasks)
    }, [])

    const currentUserTasks = tasks.filter(task => task.user.username === "nohaderf")

    const taskItem = currentUserTasks.map(task => {
        return <TaskItem key={task.id} task={task} />
    })
    
    return(
        <div>
            {taskItem}
        </div>
    )
}

export default TaskRoster;