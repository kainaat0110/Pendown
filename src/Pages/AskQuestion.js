import React from 'react';
import Navbar from '../Components/Navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import questionImg from '../Images/questionImg.png';
import Footer from '../Components/Footer';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';


export default function AskQuestion() {
  const handleCheckboxChange = (event) => {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => {
        if (checkbox !== event.target) {
            checkbox.checked = false;
        }
    });
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
          <img src={questionImg} alt= 'Banner' style={{height: '70vh' , width: '80vw'}}/>
           <Container style={glassStyle}>
           <h1 style={{fontSize: '7vh'}}>𝓟𝓸𝓼𝓽 𝔂𝓸𝓾𝓻 𝓺𝓾𝓮𝓼𝓽𝓲𝓸𝓷 !</h1>
           <Container style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    textAlign: 'center',
                }}>
                    <input class="form-check-input" type="checkbox" value="" id="life" onChange={handleCheckboxChange} />
                    <label class="form-check-label" for="life">
                        Life
                    </label>

                    <input class="form-check-input" type="checkbox" value="" id="travel" onChange={handleCheckboxChange} />
                    <label class="form-check-label" for="travel">
                        Travel
                    </label>

                    <input class="form-check-input" type="checkbox" value="" id="food" onChange={handleCheckboxChange} />
                    <label class="form-check-label" for="food">
                        Food
                    </label>

                    <input class="form-check-input" type="checkbox" value="" id="friends" onChange={handleCheckboxChange} />
                    <label class="form-check-label" for="friends">
                        Friends
                    </label>

                    <input class="form-check-input" type="checkbox" value="" id="relationship" onChange={handleCheckboxChange} />
                    <label class="form-check-label" for="relationship">
                        Relationship
                    </label>
                </Container>

                <textarea 
                    class="form-control" 
                    style={{
                      width: '100%', 
                      maxWidth: '500px',   
                      height: '150px', 
                      fontFamily: 'Verdana, sans-serif', 
                      fontSize: '16px', 
                      fontWeight: 100,
                  }}>
                </textarea>
           
              <div class="modal__footer">
              <button
                  style={{
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    fontSize: '16px',
                    transition: 'background-color 0.3s',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
                >
                  Submit
                </button>
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
           <Divider variant="middle" component="li" style={{width: '80%'}}/>
           <Footer />
        </Container>
      </Container>
    </React.Fragment>
  );
}
