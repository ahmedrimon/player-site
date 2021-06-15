import React from 'react';
import './Player.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
//  Bootstarap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Player = (props) => {
    const {name, image, salary} = props.player;
    console.log(props.player);

    const handleAddPlayer = props.handleAddPlayer
    return (
        <div className="player">
            <div className="">
                <img src={image} alt="" />
            </div>

            <div className="name">
                <h4>Name: {name}</h4>
                <p>Salary: ${salary}</p>
                <Button variant="success"  onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />   Add Player</Button>
            </div>
        </div>
        
    );
};

export default Player;