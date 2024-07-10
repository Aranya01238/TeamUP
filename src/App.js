import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import HackathonPage from './components/HackathonPage';
import ProfilePage from './components/ProfilePage';
import ChatroomPage from './components/ChatroomPage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hackathons" element={<HackathonPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chatroom" element={<ChatroomPage />} />
      </Routes>
    </Router>
  );
};

export default App;
