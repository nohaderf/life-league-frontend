import React, { useState,useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

function TaskRoster(){
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}tasks`)
        .then(r => r.json())
        .then(setTasks)
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



    const taskItem = currentUserTasks.map(task => {
        return <TaskItem key={task.id} task={task} deleteTask={handleDeleteTask} />
    })


    
    return(
        <div>
            {taskItem}
            <div className="add-task">
                 {/* <button>Add Task</button> */}
                 <h1>Add Goal</h1>
                <AddTask userId={userId} addTask={handleAddTask} />
            </div>
           
        </div>
    )
}

export default TaskRoster;