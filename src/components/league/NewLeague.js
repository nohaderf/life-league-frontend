import React, { useState } from 'react';

function NewLeague( { addNewLeague, exitForm, closeForm }){
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
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(addNewLeague)
        closeForm()
    }

    return (
        <div className="form-popup">
            <button onClick={exitForm} className="exit">X</button>
            <h1>Create A New League</h1>
            <div className="new-league-div">    
              <form className="new-league-form" onSubmit={handleSubmit}>
                
                <p><label>Name your league:</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="League"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                </p>
                <p><label>League Duration:</label>
                <select onChange={e => setDuration(parseInt(e.target.value))} required="required">
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
                    placeholder="The stakes are high..."
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    required
                /></p>
                <button type="submit">Submit</button>
            </form>  
            </div>
            
        </div>
    )
}

export default NewLeague;