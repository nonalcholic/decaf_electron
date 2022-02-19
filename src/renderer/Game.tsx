import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IReducer } from './redux';
import University from './components/University';
// import StudentComponent from './components/StudentComponent';
import { addCafe, addDormitory, addLibrary, addRestraunt, addWeeks } from './redux/university';
import { gameActions } from './redux/game';

export default function Game() {
  const dispatch = useDispatch();
  const game = useSelector((state: IReducer) => state.game);
  const actions = useSelector((state: IReducer) => state.actions);
  // const university = useSelector((state: IReducer) => state.university);

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  // Update Students with 'University'
  const updateStudents = () => {};

  // Update university with 'Actions'
  const updateUniversity = () => {
    // Weeks
    addWeeks()(dispatch);

    // Buildings
    if (actions.buildings.restaurant) {
      addRestraunt()(dispatch);
    }
    if (actions.buildings.dormintory) {
      addDormitory()(dispatch);
    }
    if (actions.buildings.cafe) {
      addCafe()(dispatch);
    }
    if (actions.buildings.library) {
      addLibrary()(dispatch);
    }
  };

  const update = () => {
    updateUniversity();
    updateStudents();
  };

  const updateGame = () => {
    dispatch(gameActions.runGame(true));
    update();
    dispatch(gameActions.runGame(false));
  };

  return (
    <div>
      <University modalVisible={modalVisible} closeModal={closeModal} />
      {game?.isRunning ? (
        <button type="button">Running...</button>
      ) : (
        <button type="button" onClick={updateGame}>
          Run
        </button>
      )}
      <button type="button" onClick={openModal}>
        Actions
      </button>
    </div>
  );
}
