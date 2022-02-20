import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}
