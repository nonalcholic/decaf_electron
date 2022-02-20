import './MainScreen.scss';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameManagerContext } from 'renderer/manager/GameManager';

interface Props {}
const MainScreen: React.FC<Props> = (props) => {
  const history = useNavigate();
  const gameManager = useContext(GameManagerContext);

  // const game = useSelector((state: IReducer) => state.game);

  // if (!game.isRunning) return null;

  const onClickStart = () => {
    if (gameManager.startGame()) history('/game');
  };

  return (
    <div className="main-screen">
      <button onClick={onClickStart}>START</button>
    </div>
  );
};

export default MainScreen;
