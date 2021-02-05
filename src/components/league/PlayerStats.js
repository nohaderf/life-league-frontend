import React, { useState, useEffect } from 'react';
import UserContainer from '../UserContainer';

function PlayerStats({ user }){
    const [userTasks, setUserTasks] = useState([])
    const [userLeague, setUserLeague] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    // const [rank, setRank] = useState()

    const { id, first_name, last_name } = user

    // console.log(user)

    //fetch user tasks
    //to get rank -> user > UserLeagues > rank
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}users/${id}`)
        .then(r => r.json())
        .then(userData => {
            setUserTasks(userData.tasks)
            setUserLeague(userData.UserLeagues)
            setIsLoaded(true)
        })
    },[])
    // console.log(userLeague) // an array of objects

    // const pointsArr = userTasks.map(task => task.points)
    
    // const totalPoints = pointsArr.reduce((a,b) => a + b )

    // const rank = userLeague.map(league => league.rank)

    if (!isLoaded) return <h1>Loading stats...</h1>

    return (
        <div>
            <table>
                <tr>
                    <td>{first_name} {last_name}</td>
                    {/* <td>{totalPoints}</td> */}
                    {/* <td>{rank}</td> */}
                </tr>
            </table>
        </div>
    )
}

export default PlayerStats;