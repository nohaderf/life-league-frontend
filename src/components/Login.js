import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ handleLogin }){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    function handleSubmit(){
        handleLogin()
    }

    return (
        <div className="main-div">
            <div className="sign-up-form-div">

                <h1>Login</h1>
                <form className="sign-up-form">
                <p><label>Username:</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                </p>
                <p><label>Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </p>
                <Link exact to="/">
                    <p><button onClick={handleSubmit} type="submit">Submit</button></p>
                </Link>
                <p class="small-font">Don't have an account? <Link exact to="/signup">Sign up here</Link>.</p>
                
            </form>
        </div>
            </div>
            
    )
}

export default Login;