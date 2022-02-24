import './GameScreen.scss';
import React, { useContext } from 'react';
import UniversityPanel from '../components/panel/UniversityDisplay';
import StudentPanel from '../components/panel/StudentPanel';
import { GameManagerContext } from '../manager/GameManager';

interface Props {
  [key: string]: never;
}
const GameScreen: React.FC<Props> = () => {
  const gameManager = useContext(GameManagerContext);

  return (
    <div className="game-screen">
      <UniversityPanel />
      <StudentPanel />
      <button type="button" onClick={() => gameManager.play()}>
        RUN
      </button>
    </div>
  );
};

export default GameScreen;
