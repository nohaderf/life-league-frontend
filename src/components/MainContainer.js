import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from "./About"
import Rules from "./Rules"
import LeaguePage from "./league/LeaguePage";
import Friends from "./friends/Friends";
import UsersProfile from './friends/UsersProfile';
import Profile from "./Profile";
import Login from "./Login";
import SignUp from "./SignUp";

function MainContainer({ handleLogin, users, currentUser, friends, notFriends, onAddFriend, deleteFriend }){
    const [leagues, setLeagues] = useState([])

    const [isLeaguesLoaded, setIsLeaguesLoaded] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}leagues/`)
        .then(r => r.json())
        .then(data => {
            setLeagues(data)
            setIsLeaguesLoaded(true)
        })
    }, [])

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
    }

    function handleDeleteLeague(deleteLeague){
        setLeagues(leagues.filter(league => league.id !== deleteLeague.id))
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
                <LeaguePage 
                    leagues={leagues} 
                    friends={friends} 
                    addNewLeague={handleNewLeague} 
                    onDeleteLeague={handleDeleteLeague}
                />    
            </Route>
            <Route path="/friends">
                <Friends 
                    friends={friends} 
                    notFriends={notFriends}
                    onAddFriend={onAddFriend} 
                    deleteFriend={deleteFriend} 
                />
            </Route>
            <Route exact path="/users/:id">
                <UsersProfile />
            </Route>
            <Route path="/profile">
                <Profile users={users} currentUser={currentUser} />
            </Route>
            <Route exact path="/login">
                <Login handleLogin={handleLogin}/>
            </Route>
            <Route  exact path="/signup">
                <SignUp />
            </Route>

        </Switch>
        </>
    )
}

export default MainContainer;