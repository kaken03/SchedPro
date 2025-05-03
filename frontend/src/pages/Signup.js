import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1 className="logo">
          <span className="sched">Sched</span>
          <span className="pro">Pro</span>
        </h1>
      </div>

      <div className="signup-form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="sign-up">Sign up</button>

        <div className="signin-link">
          Have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
