import React from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

function TaskRoster({ userId, tasks, handleAddTask, handleDeleteTask }){

    const taskItem = tasks.map(task => {
        return <TaskItem key={task.id} task={task} deleteTask={handleDeleteTask} />
    })


    return(
        <div>
            {taskItem}
            <div className="add-task">
                 {/* <button>Add Task</button> */}
                <div className="add-task-div">
                    <h1>Add Goal</h1>
                    <AddTask userId={userId} addTask={handleAddTask} />
                </div>
                
            </div>
           
        </div>
    )
}

export default TaskRoster;