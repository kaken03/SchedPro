import React, { useState } from 'react';
import './Forgotpassword.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle password reset logic here (e.g., API call)
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-header">
        <h1 className="logo">
          <span className="sched">Sched</span>
          <span className="pro">Pro</span>
        </h1>
      </div>

      <form className="forgot-form" onSubmit={handleSubmit}>
        <h2>Forgot Your Password?</h2>
        <p>Enter your email to receive a password reset link.</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="reset-btn">Send Reset Link</button>

        <div className="back-to-login">
          <Link to="/login">Back to Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
