import React from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

function TaskRoster({ userId, tasks, handleAddTask, handleDeleteTask }){

    const taskItem = tasks.map(task => {
        return <TaskItem key={task.id} task={task} deleteTask={handleDeleteTask} />
    })


    return(
        <div className="goal-roster">
            <h1>Goal Roster</h1>
            {taskItem}
            <div className="add-task">
                <div className="add-task-div">
                    <h1>Add Goal</h1>
                    <AddTask userId={userId} addTask={handleAddTask} />
                </div>
                
            </div>
           
        </div>
    )
}

export default TaskRoster;