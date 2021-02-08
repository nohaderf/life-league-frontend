import React, { useState } from 'react';

function AddTask({ userId, addTask }){
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newTask = {
            name,
            category,
            user_id: userId,
            point: 0,
            active: true,
        }
        
        fetch(`${process.env.REACT_APP_API_BASE_URL}tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newTask)
        })
        .then(r => r.json())
        .then(taskObj => {
            addTask(taskObj)
            console.log(taskObj)
        })
    }

    return(
        <div className="add-task">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Add a goal"
                    value={name}
                    onChange={e => setName(e.target.value) }
                />
                <select onChange={(e) => setCategory(String(e.target.value))}>
                    <option defaultValue="null">Category</option>
                    <option value="Health/Fitness">Health/Fitness</option>
                    <option value="Career/School">Career/School</option>
                    <option value="Personal/Hobby">Personal/Hobby</option>
                    <option value="Financial">Financial</option>
                    <option value="Spiritual">Spiritual</option>
                </select>
                <p><button>Add</button></p>
            </form>
        </div>
    )
}

export default AddTask;