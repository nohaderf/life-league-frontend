import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom";

import About from "./About"
import Rules from "./Rules"
import LeaguePage from "./league/LeaguePage";
import Friends from "./friends/Friends";

// import main_1 from '../Images/main.jpg';


function MainContainer(){
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/users/`)
        .then(r => r.json())
        .then(setUsers)
    }, [])

    const friendsList = users.filter(user => user.friend === true)

    function handleDeleteFriend(){
        const trueFriends = users.filter(user => user.friend === true)
        setUsers(trueFriends)
    }

    function handleNewFriend(){
        const newFriends = users.filter(user => user.friend === true)
        setUsers(newFriends)
    }

    return (
        <>
        <div className="main-container">
            {/* <img className="main-img-1" src={main_1} alt="KRUNCH" /> */}
        </div>

        <Switch>
            <Route exact path="/">
                <About />
            </Route>
            <Route path="/rules">
                <Rules />    
            </Route>
            <Route path="/leagues">
                <LeaguePage />    
            </Route>
            <Route path="/friends">
                <Friends 
                    friends={friendsList} 
                    users={users} 
                    onAddFriend={handleNewFriend} 
                    deleteFriend={handleDeleteFriend} 
                />
            </Route>
           
            {/* <Route path="/profile">
                <Profile/>
            </Route> */}

        </Switch>
        </>
    )
}

export default MainContainer;