import React, { useState } from 'react';
import FriendCard from './FriendCard';
import FindFriend from './FindFriend';
import Profile from '../Profile';
import UsersProfile from './UsersProfile';

function Friends({ notFriends, friends, deleteFriend, onAddFriend }){

    const [showForm, setShowForm] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [profileId, setProfileId] = useState(0)

    const friendCard = friends.map(friend => {
        return <FriendCard key={friend.id} friend={friend} onDeleteFriend={deleteFriend} loadProfile={handleLoadProfile} onRemoveProfile={removeProfile} />
    })

    function toggleAddFriend(){
        setShowForm(!showForm)
    }

    function handleLoadProfile(id){
        setProfileId(id)
        setShowProfile(true)
    }

    function removeProfile(){
        setShowProfile(false)
    }

    return (
        <div className= "main-div">
            <div className="friends-div">
                <div className="friends-list-div">
                    <h1>Friends</h1>
                    { showForm ? 
                        <button className="add-friend" onClick={toggleAddFriend}>
                            <i className="fas fa-user-minus"></i>
                        </button>: 
                        <button className="add-friend" onClick={toggleAddFriend}>
                            <i className="fas fa-user-plus"></i>
                        </button>
                    }
                    {friendCard}
                </div>
                <div className="friends-profile-div">
                    { showForm ? <FindFriend notFriends={notFriends} onAddFriend={onAddFriend} /> : 
                    <div>
                        <p>Select people's names to preview their profile. </p> 
                        { showProfile ? <UsersProfile  id={profileId} /> : null }
                    </div> }
                </div>
            </div>
            
        </div>
        
    )
}

export default Friends;