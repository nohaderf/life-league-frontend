import React, { useState, useEffect } from 'react';

function UsersProfile({ id }){
    const [user, setUser] = useState()
    // const [currentUser, setCurrentUser] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}users/${id}`)
      .then(r => r.json())
      .then(user => {
          setUser(user)
          setIsLoaded(true)
      })
  }, [id])

    if (!isLoaded) return <h1>Loading Profile...</h1>

    const { username, first_name, last_name, total_points, image_url } = user

    return (
        <div className="main-div">
            <div className="profile-div">
                <div className="shift-up">
                    <img className="profile-pic" src={image_url}></img><br></br>
                    <h1>{first_name}</h1>
                    <h2>Name: {first_name} {last_name}</h2>
                    <h2>Username: {username}</h2>  
                    { total_points ? <h2>Total earned points: {total_points ? total_points : 0 }</h2>  : 
                        <div>
                            <p>Total Earned Points: 0</p>
                            <h1> Zero points?! Better get started!</h1>
                        </div> 
                    }

                    { total_points > 20 ? 
                        <div>
                            <h1 className="achievement-unlocked">Achievements:</h1>
                            <p>Keeping working on your goals to unlock more achievements!</p>
                            <h2 className="achievement-unlocked"><i className="fas fa-award"></i> GOAL TREKKER</h2>
                        </div> : null 
                    }
                    
                    { total_points > 30 ? 
                        <div>
                            <h2  className="achievement-unlocked"><i className="fas fa-medal"></i> TRULY SKILLFUL</h2>
                        </div> : null
                    }

                    {  total_points > 100 ? 
                        <div>
                            <h2 className="achievement-unlocked"><i className="fas fa-trophy"></i>TRUE MASTER</h2>
                        </div> : null
                    }       
                    
                </div>
            </div>
      </div>
    )
}

export default UsersProfile;