import React, { useState } from 'react';

function EditLeague({ onEditLeague }){
    const [name, setName] = useState("")
    const [notes, setNotes] = useState("")
    const [duration, setDuration] = useState()
    const users = []

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            name,
            duration,
            notes,
            users
        }

        fetch(`${process.env.REACT_APP_API_BASE_URL}leagues/`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(onEditLeague)
    }

    return (
        <div className="form-popup">
            <form className="new-league-form" onSubmit={handleSubmit}>
                <button onClick={exitForm} className="exit">X</button>
                <h1>Edit League Details</h1>
                <p><label>Name your league:</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                </p>
                <p><label>League Duration:</label>
                <select onChange={e => setDuration(parseInt(e.target.value))}>
                    <option selected value="null">Choose Duration</option>
                    <option value="1">1 Week</option>
                    <option value="4">4 Weeks</option>
                    <option value="6">6 Weeks</option>
                    <option value="8">8 Weeks</option>
                </select></p>
                <p><label>Wager:</label>
                <textarea
                    type="textarea"
                    name="notes"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                /></p>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditLeague;