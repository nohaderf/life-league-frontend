import React, { useState } from 'react';

function EditProfile({ id, handleEditProfile }){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            firstName,
            lastName,
            username,
            email,
            password
        }

        if (password !== confirmPassword){
            alert("Password do no match")
        } else {
            fetch(`${process.env.REACT_APP_API_BASE_URL}users/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(r => r.json())
            .then(handleEditProfile)
        }
    }

    return (
        <div>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                        
            <label>First Name:</label>
            <input 
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />

            <label>Last Name:</label>
            <input 
                type="text"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />

            <label>Username:</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
        
            <label>Email:</label>
                <input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            
            <label>Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            
                <label>Confirm Password:</label>
                <input 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <p><button type="submit">Submit</button></p> 
            </form>
    </div>
    )
}

export default EditProfile;