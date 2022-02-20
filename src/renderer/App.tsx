import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import GameManager, { GameManagerContext } from './manager/GameManager';
import GameScreen from './screens/GameScreen';
import MainScreen from './screens/MainScreen';

export default function App() {
  const gameManager = new GameManager();

  return (
    <GameManagerContext.Provider value={gameManager}>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>
      </Router>
    </GameManagerContext.Provider>
  );
}
