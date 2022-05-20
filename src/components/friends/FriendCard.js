import React from 'react';

function FriendCard({ friend, onDeleteFriend, loadProfile, onRemoveProfile }){

    const { id, first_name, username, image_url } = friend

    function handleDeleteClick(){
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({friend:false})
        })
        .then(r => r.json())
        .then(data => {
            onDeleteFriend(data)
            onRemoveProfile(data)
        })
    }

    function loadProfileClick(){
        loadProfile(id)
    }

    return (
        <div>
            <p className="friends">
                <div onClick={loadProfileClick}>
                    <img className="profile-thumbnail" src={image_url} alt="username"/>
                    <span> {username} ({first_name})</span>
                    <button className="remove-friend" onClick={handleDeleteClick}>remove friend</button> 
                </div>
                
               
            </p>
            
        </div>
    )
}

export default FriendCard;