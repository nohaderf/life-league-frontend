import React, { useState, useEffect } from 'react';

function PlayerStats({ user }){
    const [isLoaded, setIsLoaded] = useState(false)
    const [userPoints, setUserPoints] = useState(0)
    const [totalPoints, setTotalPoints] = useState([])
    const [rank, setRank] = useState(0)

    const { id, first_name, last_name } = user
    const last_initial = last_name.charAt(0)
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}users/${id}`)
        .then(r => r.json())
        .then(userData => {
            setRank(userData.UserLeagues.map(league => league.rank))
            setUserPoints(userData.tasks.map(task => task.points))
            setIsLoaded(true)
        })
    },[])

    useEffect(() => {
        if (userPoints[0]) {
            setTotalPoints(userPoints.reduce((a,b) => a + b ))
        }
    }, [userPoints])

    if (!isLoaded) return <h1>Loading stats...</h1>

    return (
        <tr className="player-stats">
            <td className="player-names">{first_name} {last_initial}.</td>
            <td>{totalPoints}</td>
            <td>{rank}</td>
        </tr>
    )
}

export default PlayerStats