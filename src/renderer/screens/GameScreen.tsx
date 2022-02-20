import './GameScreen.scss';
import React, { useContext, useEffect, useState } from 'react';
import StudentPanel from 'renderer/components/Panel/StudentPanel';
import UniversityPanel from 'renderer/components/Panel/UniversityDisplay';
import { useSelector } from 'react-redux';
import { IReducer } from 'renderer/redux';
import { GameManagerContext } from 'renderer/manager/GameManager';

interface Props {}
const GameScreen: React.FC<Props> = (props) => {
  const gameManager = useContext(GameManagerContext);

  if (!gameManager.isRunning()) return null;

  return (
    <div className="game-screen">
      <UniversityPanel />
      <StudentPanel />
    </div>
  );
};

export default GameScreen;
