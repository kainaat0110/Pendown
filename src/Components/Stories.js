import React, { useState } from 'react';
import { Container } from '@mui/material';

export default function Stories(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) setCount(count + 1); // Increment count when checked
  };

  // Inline styles
  const containerStyle = {
    position: 'relative',
    cursor: 'pointer',
    fontSize: '15px',
    userSelect: 'none',
    transition: '100ms',
    transform: isChecked ? 'scale(1)' : 'scale(1.1)',
    display: 'flex', // Added for flexbox alignment
    alignItems: 'center', // Align items vertically
    gap: '5px', // Space between the icon and count
  };

  const inputStyle = {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
  };

  const checkmarkStyle = {
    top: 0,
    left: 0,
    height: '2em',
    width: '2em',
    transition: '100ms',
    animation: isChecked ? 'like_effect 400ms ease' : 'dislike_effect 400ms ease',
  };

  const pathStyle = {
    strokeWidth: isChecked ? '0' : '10px',
    stroke: '#FFF',
    fill: isChecked ? '#FF5353' : 'none',
  };

  // Keyframes for animations
  const keyframes = `
    @keyframes like_effect {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes dislike_effect {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  return (
    <div>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '2vh 2vw' }}>
        <div style={{ textAlign: 'justify', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span>{props.date}</span>
          <div style={containerStyle}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={inputStyle}
                aria-checked={isChecked}
              />
              <div style={checkmarkStyle}>
                <svg viewBox="0 0 256 256">
                  <rect fill="none" height="256" width="256"></rect>
                  <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    style={pathStyle}
                  ></path>
                </svg>
              </div>
            </label>
            <p style={{ margin: '0' }}>{count}</p>
            <style>{keyframes}</style>
          </div>
        </div>
        <p style={{ textAlign: 'justify' }}>{props.para}</p>
      </Container>
    </div>
  );
}
