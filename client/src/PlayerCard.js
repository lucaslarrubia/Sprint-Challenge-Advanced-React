import React from 'react';

const PlayerCard = props => {
    return (
        <div>
            {props.players.map(player => (
                <div key={player.id}>
                    <p>Name: {props.name}</p>
                    <p>Country: {props.country}</p>
                    <p># of searches: {props.searches}</p>
                </div>
            ))}
        </div>
    )
}
export default PlayerCard;