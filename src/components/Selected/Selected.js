import React from 'react';

const Selected = (props) => {
    const select = props.select
    const total = select.reduce((total,player) => total + player.salary, 0)
    return (
        <div>
                <h3>Player Selected</h3>
                <br />
                <p>Selected Player : {select.length}</p>
                <h3>Total Budget: {total}</h3>
        </div>
    );
};

export default Selected;