import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [showPassword, ] = useState(false);

  const handleGetStarted = () => {
    navigate('/signup');
  };


  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="logo">
          <span className="sched">Sched</span>
          <span className="pro">Pro</span>
        </h1>
      </div>

      <div className="login-form">
        <label>Email address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
          />
        </div>

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/forgot-password" className="forgot">Forgot your password?</Link>
        </div>

        <button className="sign-in">Sign in</button>

        <div className="divider">New to SchedPro?</div>

        <button className="create-account" onClick={handleGetStarted}>
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login;
