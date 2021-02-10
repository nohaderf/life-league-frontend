import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function PlayerStats({ user, handleRanks }){
    const [isLoaded, setIsLoaded] = useState(false)
    const [userPoints, setUserPoints] = useState(0)
    const [totalPoints, setTotalPoints] = useState([])
    const [rank, setRank] = useState()

    const taskPoints = useSelector(state => state.taskPoints)

    const { id, username, first_name, last_name } = user
    const last_initial = last_name.charAt(0)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}users/${id}`)
        .then(r => r.json())
        .then(userData => {
            setRank(userData.UserLeagues.map(userLeague => userLeague.rank))
            setUserPoints(userData.tasks.map(task => task.points))
            setIsLoaded(true)
        })
    },[])
  
    useEffect(() => {
        if (userPoints[0]) {
            setTotalPoints(userPoints.reduce((a,b) => a + b ))
        }
    }, [userPoints])

    useEffect(() => {
        if (totalPoints >=0 && username === "nohaderf") {
            setTotalPoints(totalPoints + (taskPoints/taskPoints))
        }
    }, [taskPoints])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({total_points: parseInt(totalPoints)})
            })
        .then(r => r.json())
        .then(handleRanks)
    }, [totalPoints])

    if (!isLoaded) return <h1>Loading stats...</h1>

    return (
        <tr className="player-stats">
            <td>    </td>
            {/* <td>{rank}</td> */}
            <td className="player-names">{first_name} {last_initial}. </td>
            <td>{parseInt(totalPoints)}</td>
        </tr>
    )
}

export default PlayerStats