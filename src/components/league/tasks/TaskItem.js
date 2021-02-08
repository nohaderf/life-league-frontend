import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function TaskItem({ task, deleteTask }){
    const [points, setPoints] = useState(0)
    const history = useHistory()

    function addTime(){
        setPoints(points + 1)
        fetch(`${process.env.REACT_APP_API_BASE_URL}tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({points: points})
        })
        .then(r => r.json())
        .then(() => {
            console.log("points added")
            history.push("/leagues")  
        })
    }

    function handleDelete(){
        fetch(`${process.env.REACT_APP_API_BASE_URL}tasks/${task.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(deleteTask)
    }

    return (
        <div className="task-item">
            <p>{task.name}</p> 
            <div>
                <button onClick={addTime}>log time</button>
                <button onClick={handleDelete} ><i className="far fa-trash-alt"></i></button>
            </div>
            
        </div>
    )
}

export default TaskItem;