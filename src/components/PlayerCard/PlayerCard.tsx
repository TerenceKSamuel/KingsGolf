import React from 'react';
import { Player } from '../../types';

type Props = {
  player: Player;
};

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Score: {player.score}</p>
      <p>Handicap: {player.handicap}</p>
      <p>Rank: {player.rank}</p>
    </div>
  );
};

export default PlayerCard;
