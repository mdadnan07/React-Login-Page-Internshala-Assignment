import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled/DemoWelcome.css';

const DemoWelcome = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  const handleLogin = () => {
    navigate('/sign-in');
  };

  return (
    <div className="demo-welcome-container">
      <div className="demo-welcome-card">
        <div className="card-content">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
          <div className="button-group">
            <button className="primary-btn" onClick={handleSignUp}>Create Account</button>
            <button className="secondary-btn" onClick={handleLogin}>Already Registered? Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoWelcome;
