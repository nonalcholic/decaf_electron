import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Game';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </Router>
  );
}
