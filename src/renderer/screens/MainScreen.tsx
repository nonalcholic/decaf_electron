import './MainScreen.scss';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameManagerContext } from '../manager/GameManager';

interface Props {
  [key: string]: never;
}
const MainScreen: React.FC<Props> = () => {
  const history = useNavigate();
  const gameManager = useContext(GameManagerContext);

  const onClickStart = () => {
    if (gameManager.startGame()) history('/game');
  };

  return (
    <div className="main-screen">
      <button type="button" onClick={onClickStart}>
        START
      </button>
    </div>
  );
};

export default MainScreen;
