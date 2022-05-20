import React from 'react';

function TaskStats({ task, user }){

    const { name, points, category } = task
    return(
        <tr className="task-stats">
            <td className="task-row">{user.first_name}</td>
            <td className="task-row">{name}</td>
            <td className="task-row">{category}</td>
            <td className="task-row">{points ? points : "0" }</td>
        </tr>
    )
}

export default TaskStats;