import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom";

import About from "./About"
import Rules from "./Rules"
import LeaguePage from "./league/LeaguePage";
import Friends from "./friends/Friends";
import Profile from "./profiles/Profile";

function MainContainer(){
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(0)
    const [friends, setFriends] = useState([])
    const [notFriends, setNotFriends] = useState([])
    const [leagues, setLeagues] = useState([])
    const [isUsersLoaded, setIsUsersLoaded] = useState(false)
    const [isLeaguesLoaded, setIsLeaguesLoaded] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}users/`)
        .then(r => r.json())
        .then(users => {
            setUsers(users)
            setFriends(users.filter(user => user.friend === true))
            setNotFriends(users.filter(user => user.friend === false))
            setCurrentUser(users.find(user => user.username === "nohaderf"))
            setIsUsersLoaded(true)
        })
    }, [])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}leagues/`)
        .then(r => r.json())
        .then(data => {
            setLeagues(data)
            setIsLeaguesLoaded(true)
        })
    }, [])

    console.log(friends)

    if (!isUsersLoaded) return <h1>Loading Users...</h1>
    if (!isLeaguesLoaded) return <h1>Loading League...</h1>

    function handleNewLeague(newLeague){
        setLeagues([...leagues, newLeague])

        const userLeagueData = {
            user_id: currentUser.id,
            league_id: newLeague.id
        }

        fetch(`${process.env.REACT_APP_API_BASE_URL}user_leagues`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userLeagueData)
        })
        .then(r => r.json())
        .then(console.log)
    }

    function handleNewFriend(user){
        setFriends([...friends, user])
        setNotFriends(notFriends.filter(notFriend => notFriend.id !== user.id))
    }

    function handleDeleteFriend(user){
        setNotFriends([...notFriends, user ]) //adds to find users list
        setFriends(friends.filter(friend => friend.id !== user.id))
        console.log(friends)

    }

    return (
        <>
        <div className="main-container">
        </div>

        <Switch>
            <Route exact path="/">
                <About />
            </Route>
            <Route path="/rules">
                <Rules />    
            </Route>
            <Route path="/leagues/">
                <LeaguePage leagues={leagues} currentUser={currentUser} friends={friends} addNewLeague={handleNewLeague} />    
            </Route>
            <Route path="/friends">
                <Friends 
                    friends={friends} 
                    notFriends={notFriends}
                    onAddFriend={handleNewFriend} 
                    deleteFriend={handleDeleteFriend} 
                />
            </Route>
            {/* <Route exact path="/users/:id">
                <Profile />
            </Route> */}
            {/* <Route path="/profile">
                <Profile/>
            </Route> */}

        </Switch>
        </>
    )
}

export default MainContainer;