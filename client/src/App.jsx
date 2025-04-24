import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Homepage";
import About from './Pages/About';
import Emergency from './Pages/EmergencyContact';
import Precaution from './Pages/Precaution';
import AlertPage from './Pages/AlertPage';
import SafeShelters from './Pages/SafeShelters';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/precautionsPage" element={<Precaution />} />
        <Route path="/alertpage" element={<AlertPage />} />
        <Route path="/safeShelters" element={<SafeShelters />} />
      </Routes>
    </Router>
  );
}

export default App;
