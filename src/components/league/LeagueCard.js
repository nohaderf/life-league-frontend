import React, { useState, useEffect } from 'react';
import Standings from './Standings';
import Breakdown from './Breakdown';
import AddPlayers from './AddPlayers';
import StandingsChart from './StandingsChart';

function LeagueCard({ friends, league, onDeleteClick }){
    const [showStandings, setShowStandings] = useState(true)
    const [showChart, setShowChart] = useState(false)
    const [showAddPlayers, setShowAddPlayers] = useState(false)
    const [hidePlayersBtn, setHidePlayersBtn] = useState(false)
    const [nonPlayers, setNonPlayers] = useState([])
    const [players, setPlayers] = useState([])

    const friendIds = friends.map(friend => friend.id) 
    const playerNames = players.map(player => player.first_name)
    const playerPoints = players.map(player => player.total_points)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/leagues/${league.id}`)
        .then(r => r.json())
        .then(leagueData => {
            findNonPlayers(leagueData)
            renderPlayers(leagueData)
        })
    }, [league.id])

    function findNonPlayers(leagueObj){
        const leaguePlayerIds = leagueObj.UserLeagues.map( userLeague => userLeague.user_id)
        const notPlayerIds = friendIds.filter(id => !leaguePlayerIds.includes(id))
        const notPlayerObjArr = friends.filter(friend => notPlayerIds.includes(friend.id))
        setNonPlayers(notPlayerObjArr)
    }

    function renderPlayers(leagueObj){
        setPlayers(leagueObj.users)
    }

    const usersInLeague = players.map( user => user.first_name)
    const playersList = usersInLeague.join(", ")

    function handleAddPlayers(){
        setShowAddPlayers(!showAddPlayers)
        setHidePlayersBtn(!hidePlayersBtn)
    }

    function handleHidePlayers(){
        setShowAddPlayers(!showAddPlayers)
        setHidePlayersBtn(!hidePlayersBtn)
    }

    function handleNewPlayer(userLeagueData){
        const newPlayer = friends.find(friend => friend.id === userLeagueData.user_id) 
        setPlayers([...players, newPlayer])
        const updateNonPlayer = nonPlayers.filter(player => player.id !== userLeagueData.user_id)
        setNonPlayers(updateNonPlayer)
    }

    function handleDelete(){
        fetch(`${process.env.REACT_APP_API_BASE_URL}leagues/${league.id}`, {
            method: "DELETE"
        })
        onDeleteClick(league)
    }

    function handleShowBreakdown(){
        setShowStandings(false)
    }

    function handleShowStandings(){
        setShowStandings(true)
    }

    function handleShowChart(){
        setShowChart(!showChart)
    }

    return (
        <div id={league.id} className="each-league">
            <nav className="inner-league-nav">
                <ul>
                    <li>
                        <p onClick={handleShowChart} className="chart-icon"><i className="far fa-chart-bar"></i></p> 
                    </li>
                    <li>
                        <p onClick={handleShowStandings} className="standings">Standings</p> 
                    </li>
                    <li>
                        <p onClick={handleShowBreakdown} className="breakdown">Breakdown</p>   
                    </li>
                </ul>
            </nav>
             <h1>{league.name}</h1>
             <p className="league-details"><span>Wager:</span> {league.notes}</p>
             <p className="league-details"><span>Players in League:</span> {playersList}</p>
             { hidePlayersBtn ? <button onClick={handleHidePlayers}>Hide Players</button> : <button onClick={handleAddPlayers}>Add Players</button> } 
             <button onClick={handleDelete}>Delete League</button>
            { showAddPlayers ? <AddPlayers league={league} nonPlayers={nonPlayers} onAddPlayer={handleNewPlayer} /> : null }
            { showStandings? <Standings league={league} players={players} /> : <Breakdown league={league} players={players}/> }
            { showChart ? <StandingsChart playerNames={playerNames} playerPoints={playerPoints} league={league} /> : null }
            <hr className="bottom-hr"></hr>
        </div>
    )
}

export default LeagueCard;