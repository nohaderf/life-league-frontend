// import logo from '../images/life_league_logo.png';
import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Life League.
        </p>
        <Link exact to="/main">
          <button className="get-started-btn">Get Started</button>
         </Link>
        
      </header>
    </div>
  );
}

export default App;
