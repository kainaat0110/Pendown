import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Stories(props) {
  // Initialize state with likes from localStorage
  const [likes, setLikes] = useState(() => {
    return parseInt(localStorage.getItem(`likes-${props.id}`)) || 0;
  });

  // Update localStorage whenever likes change
  useEffect(() => {
    localStorage.setItem(`likes-${props.id}`, likes);
  }, [likes, props.id]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '2vh 2vw' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span>{props.date}</span> {/* Display the date */}
          <Button 
            onClick={handleLike} 
            variant="contained" 
            color="primary" 
            startIcon={<ThumbUpIcon />}
          >
            Like {likes}
          </Button>
        </div>
        <p>{props.para}</p>
      </Container>
    </div>
  );
}
