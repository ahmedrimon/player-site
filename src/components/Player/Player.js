import React from 'react';
import './Player.css';
const Player = (props) => {
    const {name, image, salary} = props.player;
    console.log(props.player);

    const handleAddPlayer = props.handleAddPlayer
    return (
        <div>
            <h4>Name: {name}</h4>
            <img src={image} alt="" />
            <p>Salary: {salary}</p>
            <button onClick={() => handleAddPlayer(props.player)}>Add Player</button>
        </div>
    );
};

export default Player;