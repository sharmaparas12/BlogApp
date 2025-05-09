import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // optional for custom styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: integrate with API
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="login-links">
        <p onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
        <p onClick={() => navigate('/signup')}>Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
