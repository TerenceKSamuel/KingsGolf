import React from 'react';
import PlayerRow from './PlayerRow';

const Leaderboard = ({ players }) => {
  // Sort players by score
  players.sort((a, b) => a.score - b.score);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <PlayerRow key={player.id} player={player} position={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;