import React from 'react';

const PlayerCard = props => {
    return (
        <div>
            {props.players.map(player => (
                <div key={player.id}>
                    <h2>{player.name}</h2>
                    <p>Country: {player.country}</p>
                    <p># of searches: {player.searches}</p>
                </div>
            ))}
        </div>
    )
}
export default PlayerCard;