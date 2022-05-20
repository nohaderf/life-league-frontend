import React, { useEffect, useState } from 'react';
import TaskStats from './TaskStats';

function BreakdownStats({ user }){
    const [userTasks, setUserTasks] = useState([{}])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}users/${user.id}`)
        .then(r => r.json())
        .then(userObj => {
            setUserTasks(userObj.tasks.map(task => task))  
        })
    }, [user.id])

    const taskStats = userTasks.map(task => {
        return <TaskStats key={task.id} task={task} user={user} />
    })

    return (
        <>
            {taskStats}
        </>

    )
}

export default BreakdownStats;