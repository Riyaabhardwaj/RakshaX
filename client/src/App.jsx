import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Homepage";
import About from './Pages/About';
import Emergency from './Pages/EmergencyContact';
import Precaution from './Pages/Precaution';
import AlertPage from './Pages/AlertPage';
import SafeShelters from './Pages/SafeShelters';
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import FAQPage from './Pages/FAQPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/precautionsPage" element={<Precaution />} />
        <Route path="/alertPage" element={<AlertPage />} />
        <Route path="/safeShelters" element={<SafeShelters />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/FAQPage" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}

export default App;
