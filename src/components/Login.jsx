import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (
      storedData &&
      storedData.email === credentials.email &&
      storedData.password === credentials.password
    ) {
      setError('');
      alert('Login successful!');
      navigate('/profile');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Signin to your <br /> PopX account</h1>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</p>
        <form onSubmit={handleSubmit} className="login-form">

          {/* Floating Email */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>

          {/* Floating Password */}
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
