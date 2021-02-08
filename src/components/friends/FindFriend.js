import React, { useState } from 'react';
import UserList from './UserList';
import Search from './Search';

function FindFriend({ notFriends, onAddFriend }){
    const [search, setSearch] = useState("")

    const filterUsers = notFriends.filter(user => {
        return user.username.toLowerCase().includes(search.toLowerCase())
    })
    
    return (
        <div className="add-friend-div">
            <h1>Find User</h1>
            <Search search={search} onSearchChange={setSearch} />
            <UserList filterUsers={filterUsers} onAddFriend={onAddFriend} />
        </div>
    )
}

export default FindFriend;