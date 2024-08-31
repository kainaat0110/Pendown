import React from 'react';
import Navbar from '../Components/Navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import writingImg from '../Images/writingImg.png';
import { useMediaQuery, useTheme } from '@mui/material';
import Footer from '../Components/Footer';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


function WritingPage(){
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
      minHeight: '50vh',
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
      padding: '20px',
    };
    const bannerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: isSmallScreen ? 'column' : 'row',
        textAlign: 'center',
        padding: '10px',
    };
    const writingImgtyle = {
    maxHeight: isSmallScreen ? '60vh' : '80vh',
    maxWidth: isSmallScreen ? '60vh' : '80vh',
    width: '100%',  
    height: 'auto' 
    };
  
    return (
      <React.Fragment>
        <CssBaseline />
        <Container style={bgStyle}>
          <Container style={glassStyle}>
            <Navbar />
            <Container style={bannerStyle}>
                <Container style={glassStyle} >
                    <h1>𝓢𝓱𝓪𝓻𝓮 𝔂𝓸𝓾𝓻 𝓽𝓱𝓸𝓾𝓰𝓱𝓽𝓼</h1>
                    
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
                <br />
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
                <br />
                <div class="modal__footer">
                  <Button class="button">Submit</Button>
                </div>
                     
                </Container>
                <img src={writingImg} alt= 'Banner'style={writingImgtyle}/>
            </Container>
            <Divider variant="middle" component="li" style={{width: '80%'}}/>
            <Footer />
          </Container>
       </Container>
      </React.Fragment>
    );
}

export default WritingPage;
