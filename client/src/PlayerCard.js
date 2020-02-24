import React from 'react';

const PlayerCard = props => {
    return (
        <div>
            {this.state.players.map(player => (
                <div>
                    <p>Name {player.name}</p>
                    <p>Country: {player.country}</p>
                    <p># of searches: {player.searches}</p>
                </div>
            ))}
        </div>
    )
}
export default PlayerCard;