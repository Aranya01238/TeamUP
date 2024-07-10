import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HackathonPage.css';

const HackathonPage = () => {
  return (
    <div className="hackathon-page">
      <nav className="sub-navbar">
        <Link to="/hackathons/find">Find Hackathon</Link>
        <Link to="/teams/find">Find Team</Link>
        <Link to="/members/find">Find Team Members</Link>
      </nav>
      <div className="content">
        {/* List Hackathons, Teams, or Members here */}
      </div>
    </div>
  );
};

export default HackathonPage;
