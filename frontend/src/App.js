import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="app">
      <div className="content">
        <div className="logo-section">
          <h1 className="logo">
            <span className="sched">Sched</span>
            <span className="pro">Pro</span>
          </h1>
          <p className="tagline">"Stay on Track, Every Class, Every Activity."</p>
        </div>
        <button className="get-started" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
