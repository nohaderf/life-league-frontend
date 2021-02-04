import React, { useState } from 'react';
import FriendCard from './FriendCard';
import FindFriend from './FindFriend';

function Friends({ users, friends, deleteFriend, onAddFriend }){

    const [showForm, setShowForm] = useState(false)

    const friendCard = friends.map(friend => {
        return <FriendCard key={friend.id} friend={friend} onDeleteFriend={deleteFriend} />
    })

    function toggleAddFriend(){
        setShowForm(!showForm)
    }

    return (
        <div className= "main-div">
            <div className="friends-div">
                <div className="friends-list-div">
                    <h1>Friends</h1>
                    <button className="add-friend" onClick={toggleAddFriend}>
                        <i className="fas fa-user-plus"></i>
                    </button>
                    {friendCard}
                </div>
                <div className="friends-profile-div">
                    { showForm ? <FindFriend users={users} onAddFriend={onAddFriend} /> : 
                    <p>Select people's names to preview their profile. </p> }
                    
                    {/* <Profile /> */}
                </div>
            </div>
            
        </div>
        
    )
}

export default Friends;