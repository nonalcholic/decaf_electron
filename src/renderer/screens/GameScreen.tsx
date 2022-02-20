import './GameScreen.scss';
import React, { useContext, useEffect, useState } from 'react';
import StudentPanel from 'renderer/components/Panel/StudentPanel';
import UniversityPanel from 'renderer/components/Panel/UniversityDisplay';
import { GameManagerContext } from 'renderer/manager/GameManager';

interface Props {}
const GameScreen: React.FC<Props> = (props) => {
  const gameManager = useContext(GameManagerContext);

  return (
    <div className="game-screen">
      <UniversityPanel />
      <StudentPanel />
      <button onClick={() => gameManager.play()}>RUN</button>
    </div>
  );
};

export default GameScreen;
