import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ConstraintsPage from './pages/ConstraintsPage';
import MainPage from './pages/MainPage';
import CreateSchedulePage from './pages/CreateSchedulePage';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/constraints" element={<ConstraintsPage />} />
        <Route path="/create-schedule" element={<CreateSchedulePage />} />
      </Routes>
    </div>
  );
}

export default App;