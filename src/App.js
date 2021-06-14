import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import playersData from './data/db.json'


function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playersData);
    console.log(playersData);
  }, [])
  return (
    <div>
      <Header></Header>
      <ul>
        {
          players.map(player => <li>{player.name}</li>)
        }
      </ul>
      <h2>This profile picture: {players.image}</h2>
    </div>
  );
}

export default App;
