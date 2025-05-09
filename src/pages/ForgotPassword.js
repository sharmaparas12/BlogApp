import React, { useState } from 'react';
import './Login.css'; // Reuse the same CSS
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Forgot Password</h2>
        <p className="subtitle">Enter your email to reset your password</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        <div className="login-links">
          <p onClick={() => navigate('/')}>← Back to Login</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
