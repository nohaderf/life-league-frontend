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
        <>
        <div>{user.username}</div>
        <button onClick={handleAddFriend}>add friend</button>
        </>
    )
}

export default UserCard;