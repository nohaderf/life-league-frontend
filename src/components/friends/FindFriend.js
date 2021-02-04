import React, { useState } from 'react';
import UserCard from './UserCard';

function FindFriend({ users, onAddFriend }){
    const [search, setSearch] = useState("")

    const filterUsers = users.filter(user => {
        return user.username.toLowerCase().includes(search.toLowerCase())
    })

    const usersList = filterUsers.map(user => {
        if (user.username !== "nohaderf" && user.friend === false) {
            return <UserCard key={user.id} user={user} onAddFriend={onAddFriend} />
        }
        
    })
    
    return (
        <div className="add-friend-div">
            <h1>Find User:</h1>
            <div className="search-bar">
                    <input
                        className="search"
                        type="text"
                        autoComplete="off"
                        id="search"
                        placeholder="  search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <span className="search-icon"> <i className="fas fa-search"></i></span>
            </div>
            {usersList}
        </div>
    )
}

export default FindFriend;