import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import questionImg from '../Images/questionImg.png';
import Footer from '../Components/Footer';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [categories, setCategories] = useState({
    life: false,
    travel: false,
    food: false,
    friends: false,
    relationship: false,
  });

  const handleCheckboxChange = (event) => {
    setCategories(prevCategories => ({
      ...prevCategories,
      [event.target.id]: event.target.checked,
    }));
  };

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/api/sharethought/postQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: question,  // Use 'question' instead of 'text'
        ...categories,
      }),
    });
  
    const data = await response.json();
    if (response.ok) {
      // Handle successful response
      console.log('Success:', data);
      
      // Reset form
      setQuestion('');
      setCategories({
        life: false,
        travel: false,
        food: false,
        friends: false,
        relationship: false,
      });
    } else {
      // Handle errors
      console.error('Error:', data);
    }
  };
  

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '50vw',
    color: theme.palette.text.secondary,
  }));

  const bgStyle = {
    background: `linear-gradient(to bottom right,
      rgba(255, 255, 255, 0.4),     
      rgba(255, 255, 255, 0.4) 30%, 
      rgba(255, 182, 193, 0.4) 60%,
      rgba(173, 216, 230, 0.4)
    )`,
    minHeight: '100vh',
    padding: '5vh 5vw',
    maxWidth: '100%'
  };

  const glassStyle = {
    zIndex: 1,
    minHeight: '80vh',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '30px',
  };

  const bannerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: isSmallScreen ? 'column' : 'row',
    textAlign: 'center',
    padding: '10px',
    gap: '3vw'
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={bgStyle}>
        <Container style={glassStyle}>
          <Navbar />
          <br />
          <Container style={bannerStyle}>
            <img src={questionImg} alt='Banner' style={{ height: '70vh', width: '80vw' }} />
            <Container style={glassStyle}>
              <h1 style={{ fontSize: '7vh' }}>𝓟𝓸𝓼𝓽 𝔂𝓸𝓾𝓻 𝓺𝓾𝓮𝓼𝓽𝓲𝓸𝓷 !</h1>
              <Container style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: isSmallScreen ? 'column' : 'row',
                textAlign: 'center',
              }}>
                <input className="form-check-input" type="checkbox" id="life" checked={categories.life} onChange={handleCheckboxChange} />
                <label className="form-check-label" htmlFor="life">Life</label>

                <input className="form-check-input" type="checkbox" id="travel" checked={categories.travel} onChange={handleCheckboxChange} />
                <label className="form-check-label" htmlFor="travel">Travel</label>

                <input className="form-check-input" type="checkbox" id="food" checked={categories.food} onChange={handleCheckboxChange} />
                <label className="form-check-label" htmlFor="food">Food</label>

                <input className="form-check-input" type="checkbox" id="friends" checked={categories.friends} onChange={handleCheckboxChange} />
                <label className="form-check-label" htmlFor="friends">Friends</label>

                <input className="form-check-input" type="checkbox" id="relationship" checked={categories.relationship} onChange={handleCheckboxChange} />
                <label className="form-check-label" htmlFor="relationship">Relationship</label>
              </Container>

              <textarea
                className="form-control"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '150px',
                  fontFamily: 'Verdana, sans-serif',
                  fontSize: '16px',
                  fontWeight: 100,
                }}
                value={question}
                onChange={handleInputChange}
              />

              <div className="modal__footer">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: '#007BFF',
                    color: 'white',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    fontSize: '16px',
                    transition: 'background-color 0.3s',
                    width: '100%'
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Container>
          </Container>
          <Container style={glassStyle}>
            <h1>Frequently Asked Questions</h1>
            <Stack spacing={2}>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
              <Item>Item 1</Item>
            </Stack>
          </Container>
          <Divider variant="middle" component="li" style={{ width: '80%' }} />
          <Footer />
        </Container>
      </Container>
    </React.Fragment>
  );
}
