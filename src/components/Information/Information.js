import React, { useEffect, useState } from 'react';
import './Information.css';
import playerData from '../../data/db.json';
import Player from '../Player/Player';
import Selected from '../Selected/Selected';

const Information = () => {
    const [players, setPlayers] = useState([]);
    const [select, setSelect] = useState([]);

    useEffect(() => {
    setPlayers(playerData);
    // console.log(playersData);
    }, [])

    const handleAddPlayer = (player) => {
        console.log("added", player)
        const newSelect = [...select, player];
        setSelect(newSelect);
    }
    return (
        <div className="information-container">
            <div className="player-container">
                <ul>
                    {
                     players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Player>)
                    }
                </ul>
            </div>
            <div className="selected-container">
                    <Selected select={select}></Selected>

            </div>
        </div>
    );
};

export default Information;