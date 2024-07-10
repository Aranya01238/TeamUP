import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registration</Link>
        <Link to="/hackathons">Hackathon</Link>
        <Link to="/projects">Project</Link>
        <Link to="/profile">Profile/Your Team</Link>
        <Link to="/chatroom">Chatroom</Link>
      </div>
      <div className="right">
        <span>ID: {Math.random().toString(36).substr(2, 9)}</span>
        <button>Connect to Wallet</button>
        <button>Notifications</button>
      </div>
    </nav>
  );
};

export default Navbar;
