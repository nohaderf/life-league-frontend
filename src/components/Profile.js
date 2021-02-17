import React, { useState, useEffect } from 'react';
import CategoryChart from './CategoryChart';
import EditProfile from './EditProfile';
import UploadPic from './UploadPic';

function Profile(){
    const [users, setUsers] = useState([])
    const [uploadPic, setUploadPic] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [editForm, setEditForm] = useState(false)
    const [image, setImage] = useState("")

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}users/`)
      .then(r => r.json())
      .then(users => {
         setUsers(users)
        //   setCurrentUser(users.find(user => user.username === "nohaderf"))
          setIsLoaded(true)
    console.log("loading...")
      })
    }, [])    
    console.log(users)

    useEffect(() => {
        if (users.length > 0) {
            setCurrentUser(users.find(user => user.username === "nohaderf"))
        } else {
            return <h2>loading...</h2>
        }
    }, [users])

    console.log(currentUser)

    if (!isLoaded) return <h1>Loading Profile...</h1> 

    const { id, username, first_name, last_name, email, image_url, total_points } = currentUser

    function handleEdit(){
        setEditForm(!editForm)
    }

    function handleUploadPic(){
        setUploadPic(!uploadPic)
    }

    function handleExitForm(){
        setUploadPic(false)
    }
    
    function handleUpdatePic(url){
        fetch(`${process.env.REACT_APP_API_BASE_URL}users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({image_url: url})
        })
        .then(r => r.json())
        .then(data => {
            setImage(data.image_url)
            console.log(data)
            console.log(data.image_url)
            handleExitForm()
        })
    }

    return (
        <div className="main-div">
            <div className="profile-div">
                { image ? <img className="profile-pic" src={image}></img> : <img className="profile-pic" src={image_url}></img> }
                <button onClick={handleUploadPic} className="change-pic"><i className="fas fa-camera"></i></button>
                { uploadPic ? <UploadPic exitForm={handleExitForm} handleUpdatePic={handleUpdatePic} /> : null }
                <h1>Your Profile, {first_name}</h1>
                { editForm ? <button className="edit-profile" onClick={handleEdit}>Cancel Edit</button> : <button onClick={handleEdit} className="edit-profile">Edit Profile</button> }
                { editForm ? <div className="edit-profile-info"> 
                    <EditProfile id={id} handleEditProfile={handleEdit} />
                </div>: <div className="profile-info"> 
                    <h2>Name: {first_name} {last_name}</h2>
                    <h2>Username: {username}</h2>
                    <h2>Email: {email}</h2>
                </div> }

                <br></br><hr></hr><br></br>
                <h1>Points Tracker</h1>
                
                <h2>Total Points: {total_points}</h2>

                { total_points > 20 ? 
                        <div>
                            <div><h2 className="wow-profile">WOW! {total_points}, POINTS!</h2></div>
                            <h1 className="achievement-unlocked">ACHIEVEMENT UNLOCKED!</h1>
                            <h1 className="achievement"><i className="fas fa-award"></i> GOAL TREKKER</h1>
                            <p>Keeping working on your goals to unlock more achievements!</p>
                        </div> :
                     <h2>Total earned points: {total_points}</h2>  }
                    
                { total_points > 30 ? 
                     <div>
                        <h2 className="achievement-unlocked">Achievements:</h2>
                        <h1><i className="fas fa-medal"></i> TRULY SKILLFUL</h1>
                     </div> : null
                }

                { total_points > 100 ? 
                    <div>
                        <h2 className="achievement-unlocked">Achievements:</h2>
                        <h1><i className="fas fa-trophy"></i>TRUE MASTER</h1>
                    </div> : null
                }     
                <br></br><hr></hr><br></br>
                <h1>Track Your Progress</h1>
                <CategoryChart currentUser={currentUser} />
            </div>
      </div>
    )
}

export default Profile;