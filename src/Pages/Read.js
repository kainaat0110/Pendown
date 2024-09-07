import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stories from '../Components/Stories';
import Footer from '../Components/Footer';
import QuestionAns from '../Components/QuestionAns';
import { Grid, useMediaQuery } from '@mui/material';
import axios from 'axios';  // Make sure you have axios installed

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Read() {
  const [value, setValue] = React.useState(0);
  const [questions, setQuestions] = useState([]);
  const [thoughts, setThoughts] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Fetch questions from the API
    axios.get('http://localhost:5000/api/sharethought/getQuestion')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });

    // Fetch thoughts from the API
    axios.get('http://localhost:5000/api/sharethought/getsharethoughts')
      .then(response => {
        setThoughts(response.data);
      })
      .catch(error => {
        console.error('Error fetching thoughts:', error);
      });
  }, []);

  const bgStyle = {
    background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4) 30%, rgba(255, 182, 193, 0.4) 60%, rgba(173, 216, 230, 0.4))',
    minHeight: '100vh',
    padding: '5vh 5vw',
    maxWidth: '100%',
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
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={bgStyle}>
        <Container style={glassStyle}>
          <Navbar />
          <br />
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Shared Stories" {...a11yProps(0)} />
              <Tab label="Questions" {...a11yProps(1)} />
              <Tab label="Thoughts" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'column', gap: '10px', marginBottom: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                  <input type="checkbox" style={{ marginRight: '10px' }} name="filter" value="Most Liked" /> Most Liked
                </label>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                  <input type="checkbox" style={{ marginRight: '10px' }} name="filter" value="Date" /> Date
                </label>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                  <input type="checkbox" style={{ marginRight: '10px' }} name="filter" value="Life" /> Life
                </label>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                  <input type="checkbox" style={{ marginRight: '10px' }} name="filter" value="Travel" /> Travel
                </label>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                  <input type="checkbox" style={{ marginRight: '10px' }} name="filter" value="Food" /> Food
                </label>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                  <input type="checkbox" style={{ marginRight: '10px' }} name="filter" value="Friends" /> Friends
                </label>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                  <input type="checkbox" style={{ marginRight: '10px' }} name="filter" value="Relationship" /> Relationship
                </label>
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
                  Filter
                </button>
              </div>
            </Grid>
            <Grid item xs={12} md={9}>
              <CustomTabPanel value={value} index={0}>
                <Stories id="1" para="As a food blogger, I recently had the pleasure of discovering a hidden gem in Mumbai's bustling Bandra neighborhood. Nestled in a quaint lane, 'Fusion Flavors' is the city's newest culinary hotspot that's creating quite a buzz. The moment I stepped in, I was captivated by the restaurant's chic industrial-meets-traditional decor, setting the stage for an intriguing dining experience. Chef Arjun Kapoor's innovative menu seamlessly blends local Maharashtra flavors with global cuisines, resulting in dishes that are both familiar and excitingly novel. The star of the evening was undoubtedly the 'Mumbai Merlot Mutton' - a succulent lamb shank slow-cooked in a rich red wine and coconut gravy, served with a saffron-infused risotto. The 'Koli-style Ceviche' was another standout, marrying the freshness of local seafood with zesty Latin American flavors. With its creative cocktails, attentive service, and a menu that pushes culinary boundaries, Fusion Flavors is definitely a must-visit for food enthusiasts looking to embark on a gastronomic adventure in Mumbai." date="March 10, 2024" />
                <Stories id="2" para="One of life's most valuable lessons is the power of resilience in the face of adversity. Throughout our journey, we inevitably encounter obstacles, setbacks, and failures that test our resolve. It's during these challenging times that we learn the true measure of our character. The ability to bounce back, to view failures as opportunities for growth rather than insurmountable barriers, is what ultimately shapes our future. This resilience isn't about avoiding hardship, but rather about developing the mental fortitude to persevere through it. By embracing challenges and learning from our missteps, we not only become stronger individuals but also open ourselves up to new possibilities and personal growth. Remember, it's not the absence of difficulties that defines us, but how we rise above them that truly matters." date="November 7, 2023" />
                <Stories id="3" para="Matheran, a quaint hill station located just a few hours from Mumbai, offers a refreshing retreat from the city's hustle and bustle. Known for its serene landscapes and lush greenery, Matheran provides a perfect escape for nature enthusiasts. One of the most charming aspects of Matheran is its ban on motor vehicles, which means that visitors can explore the town on foot or horseback. The town is dotted with scenic viewpoints like Panorama Point and Echo Point, each offering breathtaking views of the surrounding valleys and hills. A leisurely stroll through the ancient forest trails reveals the rich biodiversity of the region, including colorful butterflies and exotic bird species. For those seeking relaxation, Matheran's cool climate and tranquil environment make it an ideal destination to unwind and reconnect with nature." date="August 9, 2023" />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {questions.length > 0 ? (
                  questions.map((q) => (
                    <QuestionAns key={q._id} ques={q.question} />
                  ))
                ) : (
                  <p>No questions available.</p>
                )}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                {thoughts.length > 0 ? (
                  thoughts.map((t) => (
                    <QuestionAns key={t._id} ques={t.text} />
                  ))
                ) : (
                  <p>No thoughts available.</p>
                )}
              </CustomTabPanel>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </Container>
    </React.Fragment>
  );
}
