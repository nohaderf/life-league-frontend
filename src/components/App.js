import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MainContainer from './MainContainer';
import Footer from './Footer';
import Header from './Header';
import '../App.css';

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(0)
  const [friends, setFriends] = useState([])
  const [notFriends, setNotFriends] = useState([])
  const [isUsersLoaded, setIsUsersLoaded] = useState(false)
  const [login, setLogin] = useState(false)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}users/`)
    .then(r => r.json())
    .then(users => {
        // setUsers(users)
        setFriends(users.filter(user => user.friend === true))
        setNotFriends(users.filter(user => user.friend === false))
        setCurrentUser(users.find(user => user.username === "nohaderf"))
        setIsUsersLoaded(true)
    })
  }, [])

  // useEffect(() => {
  //   if (users[0]) {
        
  //   }
  // }, [])

  if (!isUsersLoaded) return <h1>Loading Users...</h1>

  function handleNewFriend(user){
    setFriends([...friends, user])
    setNotFriends(notFriends.filter(notFriend => notFriend.id !== user.id))
  }

  function handleDeleteFriend(user){
    setNotFriends([...notFriends, user ]) //adds to find users list
    setFriends(friends.filter(friend => friend.id !== user.id))
  }

  function handleLogin(){
    setLogin(true)
    // handleNavBar()
  }

  function handleLogout(){
    setLogin(false)
  }

  return (
    <div className="App">
        { login ? <NavBar currentUser={currentUser} handleLogout={handleLogout} /> : <Header  /> }
        <MainContainer 
          users={users} 
          currentUser={currentUser} 
          friends={friends} 
          handleLogin={handleLogin}
          notFriends={notFriends} 
          onAddFriend={handleNewFriend} 
          deleteFriend={handleDeleteFriend} 
        />
        <Footer />
    </div>
  );
}

export default App;
