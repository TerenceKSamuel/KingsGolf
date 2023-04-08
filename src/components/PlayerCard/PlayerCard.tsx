import React, { FC } from 'react';
import { Player } from '../types';

interface Props {
  player: Player;
}

const PlayerCard: FC<Props> = ({ player }) => {
  return (
    <div>
      <h2>{player.name}</h2>
      <p>Score: {player.score}</p>
      <p>Rank: {player.rank}</p>
      <button onClick={() => player.incrementScore()}>Increment Score</button>
    </div>
  );
};

export default PlayerCard;