import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Stories(props) {
  // // Initialize state with likes from localStorage
  // const [likes, setLikes] = useState(() => {
  //   return parseInt(localStorage.getItem(`likes-${props.id}`)) || 0;
  // });

  // // Update localStorage whenever likes change
  // useEffect(() => {
  //   localStorage.setItem(`likes-${props.id}`, likes);
  // }, [likes, props.id]);

  // const handleLike = () => {
  //   setLikes(likes + 1);
  // };
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if(isChecked === false) setCount(count + 1); // Increment count on every toggle
  };

  // Inline styles
  const containerStyle = {
    position: 'relative',
    cursor: 'pointer',
    fontSize: '15px',
    userSelect: 'none',
    transition: '100ms',
    transform: isChecked ? 'scale(1)' : 'scale(1.1)',
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span>{props.date}</span>
          <div>
            <label style={containerStyle}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={inputStyle}
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
            <p>{count}</p>
            <style>{keyframes}</style>
          </div>
        </div>
        <p>{props.para}</p>
      </Container>
    </div>
  );
}
