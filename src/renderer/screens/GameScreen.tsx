import './GameScreen.scss';
import React, { useContext, useState } from 'react';
import useModal from 'renderer/hooks/useModal';
import UniversityPanel from '../components/panel/UniversityDisplay';
import StudentPanel from '../components/panel/StudentPanel';
import { GameManagerContext } from '../manager/GameManager';

interface Props {
  [key: string]: never;
}
const GameScreen: React.FC<Props> = () => {
  const gameManager = useContext(GameManagerContext);

  const [selectModal, openSelectModal, closeSelectModal] = useModal(<>hello</>);

  return (
    <div className="game-screen">
      <UniversityPanel />
      <StudentPanel />
      <button type="button" onClick={() => gameManager.play()}>
        RUN
      </button>
      <button type="button" onClick={() => openSelectModal()}>
        select
      </button>
      {selectModal}
    </div>
  );
};

export default GameScreen;
