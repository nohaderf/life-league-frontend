import React from 'react';
// import { Link } from 'react-router-dom';

function FriendCard({ friend, onDeleteFriend }){

    const { id, first_name, username, image_url } = friend

    console.log(image_url)

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
            <p className="friends">
                
                {/* <Link to={`/users/${id}`}> */}
                <img className="profile-thumbnail" src={image_url} alt="username"/>
                <span> {username} ({first_name})</span>
                {/* </Link> */}
                <button className="remove-friend" onClick={handleDeleteClick}>remove friend</button> 
            </p>
            
        </div>
    )
}

export default FriendCard;