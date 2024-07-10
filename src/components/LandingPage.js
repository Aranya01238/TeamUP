import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Team Up</h1>
      <button onClick={() => window.location.href = '/home'}>Launch App</button>
    </div>
  );
};

export default LandingPage;
