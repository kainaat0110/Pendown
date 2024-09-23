import React, { useState } from 'react';

export default function Login() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // Inline styles for responsiveness
  const loginBgStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f3f3f3',
    minHeight: '100vh'
  };

  const inputBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '300px',
    margin: '0 auto',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    backgroundColor: '#ffffff'
  };

  const inputStyle = {
    width: '70%',
    height: '40%',
    fontSize: '16px',
    background: 'transparent',
    borderRadius: '10px',
    outline: '#201F6D',
    border: 'none',
    color: 'rgb(112, 107, 107)',
    padding: '10px',
    display: 'list-item',
    marginBottom: '3%',
  };

  const userLoginStyle = {
    paddingLeft: '30%',
    paddingRight: '30%',
    position: 'relative',
    right: '60px',
    backgroundColor: '#201F6D',
    color: '#fff',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px'
  };

  const textStyle = {
    textAlign: 'center',
    marginTop: '20px'
  };

  const logoStyle = {
    height: '70px',
    width: '190px',
    marginBottom: '20px'
  };

  const headerStyle = {
    fontFamily: 'Tahoma',
    fontSize: '30px',
    fontWeight: '400',
    textShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 15px',
    color: '#201F6D',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const tabContainerStyle = {
    maxWidth: '100%',
    overflow: 'hidden',
    alignContent: 'center'
  };

  const tabMenuStyle = {
    marginLeft: '20%',
    padding: '0',
    display: 'flex',
    gap: '0.5rem',
    alignContent: 'center'
  };

  const tabButtonStyle = (isActive) => ({
    fontFamily: 'Tahoma',
    fontSize: '16px',
    fontWeight: '300',
    backgroundColor: isActive ? '#201F6D' : '#CCE4FF',
    border: 'none',
    borderBottomColor: '#201F6D',
    color: isActive ? '#fff' : '#201F6D',
    borderRadius: '4px 4px 0 0',
    padding: '0.75rem 3rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-out',
  });

  return (
    <div style={loginBgStyle}>
      <h1 style={headerStyle}>Welcome Back</h1>
      <div id="tabs" style={tabContainerStyle}>
        
        <div id="tab-content">
        <div style={inputBoxStyle}>
          <input required placeholder="User" type="text" style={inputStyle} />
          <input required placeholder="Password" type="password" style={inputStyle} />
          <button type="submit" style={userLoginStyle}>
            Login
          </button>
          <p style={textStyle}>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
