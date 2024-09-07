import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import writingImg from '../Images/writingImg.png';
import { useMediaQuery, useTheme } from '@mui/material';
import Footer from '../Components/Footer';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function WritingPage() {
  const [text, setText] = useState('');
  const [filters, setFilters] = useState({
    isMostLiked: false,
    date: false,
    life: false,
    travel: false,
    food: false,
    relationships: false,
    friends: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked
    }));
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      text,
      ...filters
    };

    try {
      const response = await fetch('http://localhost:5000/api/sharethought/sharethought', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        // Optionally, reset the form
        setText('');
        setFilters({
          isMostLiked: false,
          date: false,
          life: false,
          travel: false,
          food: false,
          relationships: false,
          friends: false,
        });
      } else {
        const error = await response.json();
        console.error('Error:', error);
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
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
                  
                  <Container>
                <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: '10px', marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isSmallScreen ? '100%' : 'auto' }}>
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  name="isMostLiked" 
                  checked={filters.isMostLiked}
                  onChange={handleCheckboxChange}
                /> Most Liked
              </label>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isSmallScreen ? '100%' : 'auto' }}>
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  name="date" 
                  checked={filters.date}
                  onChange={handleCheckboxChange}
                /> Date
              </label>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isSmallScreen ? '100%' : 'auto' }}>
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  name="life" 
                  checked={filters.life}
                  onChange={handleCheckboxChange}
                /> Life
              </label>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isSmallScreen ? '100%' : 'auto' }}>
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  name="travel" 
                  checked={filters.travel}
                  onChange={handleCheckboxChange}
                /> Travel
              </label>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isSmallScreen ? '100%' : 'auto' }}>
                <input 
                                   type="checkbox" 
                                   className="form-check-input" 
                                   name="food" 
                                   checked={filters.food}
                                   onChange={handleCheckboxChange}
                                 /> Food
                               </label>
                               <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isSmallScreen ? '100%' : 'auto' }}>
                                 <input 
                                   type="checkbox" 
                                   className="form-check-input" 
                                   name="friends" 
                                   checked={filters.friends}
                                   onChange={handleCheckboxChange}
                                 /> Friends
                               </label>
                               <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isSmallScreen ? '100%' : 'auto' }}>
                                 <input 
                                   type="checkbox" 
                                   className="form-check-input" 
                                   name="relationships" 
                                   checked={filters.relationships}
                                   onChange={handleCheckboxChange}
                                 /> Relationships
                               </label>
                               </div>
                               </Container>
                               <br />
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
                                 value={text}
                                 onChange={handleTextChange}
                               />
                               <br />
                               <div className="modal__footer">
                               <Button
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
                                 onClick={handleSubmit}
                               >
                                 Submit
                               </Button>
                               </div>
                                    
                               </Container>
                               <img src={writingImg} alt='Banner' style={writingImgtyle}/>
                           </Container>
                           <Divider variant="middle" component="li" style={{width: '80%'}}/>
                           <Footer />
                         </Container>
                      </Container>
                     </React.Fragment>
                   );
                 }
                 
                 export default WritingPage;
                 
