import React from 'react';

function TaskItem({ task }){

    // console.log(task)

    function addTime(){

    }

    return (
        <div className="task-item">
            <p>{task.name}</p> <button onClick={addTime}>log time</button>
        </div>
    )
}

export default TaskItem;