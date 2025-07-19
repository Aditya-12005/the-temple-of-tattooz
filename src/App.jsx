import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage.jsx';
import NavBar from './components/navbar.jsx';

function App() {
  return (
    <Router>
      {/* Navbar shown across all routes */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;