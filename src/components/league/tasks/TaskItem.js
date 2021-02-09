import React, { useState, useEffect } from 'react';

function TaskItem({ task, deleteTask }){
    const [points, setPoints] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}tasks/${task.id}`)
        .then(r => r.json())
        .then(taskData => setPoints(taskData.points))
    }, [task.id])

    function addTime(){
        fetch(`${process.env.REACT_APP_API_BASE_URL}tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({points: task.points += 1})
        })
        .then(r => r.json())
        .then(handleAddPoints)
    }

    function handleDelete(){
        fetch(`${process.env.REACT_APP_API_BASE_URL}tasks/${task.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(deleteTask)
    }

    function handleAddPoints(newTaskData){
       setPoints(newTaskData.points + 1)
    }

    return (
        <>
        <div className="task-item">
            <p>{task.name}</p> 
            <div>
                <button onClick={addTime}>log time</button>
                <button onClick={handleDelete} ><i className="far fa-trash-alt"></i></button>
            </div>
        </div>
        <p className="task-points">Points earned: {points}</p>
        </>
    )
}

export default TaskItem;