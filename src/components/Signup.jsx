import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '', // "yes" or "no"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('userData', JSON.stringify(formData));

    alert('Account created successfully!');
    navigate('/profile');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create your <br /> PopX account</h1>
        <form onSubmit={handleSubmit} className="signup-form">

          {/* Full Name */}
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="fullName">Full name</label>
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="phoneNumber">Phone number</label>
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Email address</label>
          </div>

          {/* Password */}
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* Company Name */}
          <div className="form-group">
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder=" "
            />
            <label htmlFor="companyName">Company name</label>
          </div>

          {/* Radio Group */}
          <div className="radio-group">
            <label className="ag-label">Are you an agency?</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
