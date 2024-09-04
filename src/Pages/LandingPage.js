import React from 'react';
import Navbar from '../Components/Navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import bannerImg from '../Images/bannerImg.png';
import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import QuizIcon from '@mui/icons-material/Quiz';
import free from '../Images/free.png';
import shaming from '../Images/shaming.png';
import write from '../Images/write.png';
import Divider from '@mui/material/Divider';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';



export default function LandingPage() {
  const navigate = useNavigate();
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
    padding: '20px',
  };
  const glassStyleIcon = {
    zIndex: 1,
    height: '6vh',
    width: '4vw',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '5px',
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
  };

  const bannerImgStyle = {
    maxHeight: isSmallScreen ? '60vh' : '80vh',
    maxWidth: isSmallScreen ? '60vh' : '80vh',
    width: '100%',  
    height: 'auto' 
  };

  const textStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: isSmallScreen ? 'flex-start' : 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '10px',
  };

  const bannerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: isSmallScreen ? 'column' : 'row',
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={bgStyle}>
        <Container style={glassStyle}>
          <Navbar />
          <Container style={bannerStyle}>
            <img src={bannerImg} alt="Banner" style={bannerImgStyle} />
            <Container style={textStyle}>
              <h1>𝚆𝚛𝚒𝚝𝚎 𝙸𝚝 𝙳𝚘𝚠𝚗 <br /> 𝙰𝚜𝚔 𝚢𝚘𝚞𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜 <br />𝚂𝚑𝚊𝚛𝚎 𝚢𝚘𝚞𝚛 𝚝𝚑𝚘𝚞𝚐𝚑𝚝𝚜</h1>
              <p>
                Express yourself freely and anonymously on PenDown. Whether you have burning questions, 
                insightful ideas, or stories to tell, this is your space to be heard. Join our community 
                of curious minds and diverse voices.
              </p>
              <Button onClick={ () => navigate('/read')}>
                Get Started
              </Button>
              <br />
              <Container style={bannerStyle}>
              <Container style={glassStyleIcon}><PersonOffIcon /></Container>
              <Container style={glassStyleIcon}><HistoryEduIcon/></Container>
              <Container style={glassStyleIcon}><QuizIcon/></Container>
              </Container>
            </Container>
          </Container>
          <Divider variant="middle" component="li" style={{width: '80%'}}/>
          <br />
          <Container style={bannerStyle}>
            <Container>
            <h1>Freedom to Be You!</h1>
            <p>Express yourself freely and soar to new heights. Our platform is your canvas to share any aspect of your life without hesitation. Like balloons lifting you skyward, let your thoughts and experiences take flight. Share your story, your passions, and your dreams with a supportive community that celebrates authenticity. Here, you're encouraged to be uniquely you.</p>
            </Container>
            <img src={free} alt='banner' style={{height: '70vh' , width: '70vw'}}/>
          </Container>
          <Container style={bannerStyle}>
          <img src={shaming} alt='banner' style={{height: '50vh' , width: '50vw'}}/>
          <Container>
            <h1>Invisible You, Visible Thoughts</h1>
            <p>Express yourself freely and soar to new heights. Our platform is your canvas to share any aspect of your life without hesitation. Like balloons lifting you skyward, let your thoughts and experiences take flight. Share your story, your passions, and your dreams with a supportive community that celebrates authenticity. Here, you're encouraged to be uniquely you.</p>
            </Container>
          </Container>
          <Container style={bannerStyle}>
          <Container>
            <h1>Ask Anything, Fear Nothing</h1>Curiosity knows no bounds, and neither should your quest for knowledge. Our platform is a judgment-free zone where you can ask any question that crosses your mind, no matter how big, small, or unconventional. Whether you're seeking clarification on complex topics, looking for advice on personal matters, or simply wondering about the world around you, feel free to inquire without hesitation. No question is too silly or too serious. Here, your curiosity is celebrated, and every inquiry is an opportunity for growth and understanding. Ask away, and let your inquisitive spirit soar!
            <p></p>
          </Container>
            <img src={write} alt='banner' style={{height: '70vh' , width: '70vw'}}/>
          </Container>
          <Divider variant="middle" component="li" style={{width: '80%'}}/>
          <Footer />
        </Container>
      </Container>
    </React.Fragment>
  );
}
