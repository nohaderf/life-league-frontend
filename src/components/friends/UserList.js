import React from 'react';
import UserCard from './UserCard';

function UserList({ filterUsers, onAddFriend }){

    const usersList = filterUsers.map(user => {
        if (user.username !== "nohaderf" && user.friend === false) {
            return <UserCard key={user.id} user={user} onAddFriend={onAddFriend} />
        } 
    })

    if (usersList <= 0){
        return <p className="error">There are no users under that username <i className="far fa-frown"></i></p>
    }

    return (
        <div>
            {usersList}
        </div>
    )
}

export default UserList;