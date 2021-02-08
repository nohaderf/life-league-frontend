import React from 'react';

function UserCard({ user, onAddFriend }){

    function handleAddFriend(){
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({friend:true})
        })
        .then(r => r.json())
        .then(onAddFriend)
    }

    return (
        <div className="search-results">
            <img className="profile-thumbnail" src={user.image_url} alt="username"/>
            <p className="username">{user.username}</p>
            <button className="add-friend-btn" onClick={handleAddFriend}>add friend</button>
        </div>
    )
}

export default UserCard;