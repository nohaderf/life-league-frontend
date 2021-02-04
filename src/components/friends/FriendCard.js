import React from 'react';

function FriendCard({ friend, onDeleteFriend }){

    const { id, first_name, username } = friend

    function handleDeleteClick(){
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({friend:false})
        })
        .then(r => r.json())
        .then(onDeleteFriend)
    }

    return (
        <div>
            <p className="username">
                <button onClick={handleDeleteClick}><i className="far fa-trash-alt"></i></button> 
                {username} ({first_name})
            </p>
            
        </div>
    )
}

export default FriendCard;