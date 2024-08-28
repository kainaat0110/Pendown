import React from 'react';
import Navbar from '../Components/Navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stories from '../Components/Stories';
import Footer from '../Components/Footer';
import Divider from '@mui/material/Divider';
import QuestionAns from '../Components/QuestionAns';

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

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const containerStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column', // Change direction based on screen size
        flexWrap: isMobile ? 'wrap' : 'nowrap', // Allow wrapping on small screens
        gap: '10px',
        marginBottom: '20px',
    };

    const labelStyle = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        cursor: 'pointer',
        width: isMobile ? '50%' : 'auto', // 50% width for mobile, auto for larger screens
    };

    const checkboxStyle = {
        marginRight: '10px',
    };

    const buttonStyle = {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            </Tabs>
            </Box>
            <br />
             
            <Container >   
            <Container style = {{ display : 'flex' , flexDirection : 'row' }} > 
              <Container style = {{ display : 'flex' , flexDirection : 'column' , width: 'fit-content'}}> 
                <br />
                    <div style={containerStyle}>
                    <label style={labelStyle}><input type="checkbox" style={checkboxStyle} name="filter" value="Relationship" /> Most Liked</label>
                    <label style={labelStyle}><input type="checkbox" style={checkboxStyle} name="filter" value="Relationship" /> Date</label>
                    <label style={labelStyle}><input type="checkbox" style={checkboxStyle} name="filter" value="Life" /> Life</label>
                    <label style={labelStyle}><input type="checkbox" style={checkboxStyle} name="filter" value="Travel" /> Travel</label>
                    <label style={labelStyle}><input type="checkbox" style={checkboxStyle} name="filter" value="Food" /> Food</label>
                    <label style={labelStyle}><input type="checkbox" style={checkboxStyle} name="filter" value="Friends" /> Friends</label>
                    <label style={labelStyle}><input type="checkbox" style={checkboxStyle} name="filter" value="Relationship" /> Relationship</label>
                    <button 
                        style={buttonStyle} 
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
                    >
                        Filter
                    </button>
                </div>

                     
                    </Container>
                 
            <Container >  
              <CustomTabPanel value={value} index={0}>
                <Stories id="1" para="As a food blogger, I recently had the pleasure of discovering a hidden gem in Mumbai's bustling Bandra neighborhood. Nestled in a quaint lane, 'Fusion Flavors' is the city's newest culinary hotspot that's creating quite a buzz. The moment I stepped in, I was captivated by the restaurant's chic industrial-meets-traditional decor, setting the stage for an intriguing dining experience. Chef Arjun Kapoor's innovative menu seamlessly blends local Maharashtra flavors with global cuisines, resulting in dishes that are both familiar and excitingly novel. The star of the evening was undoubtedly the 'Mumbai Merlot Mutton' - a succulent lamb shank slow-cooked in a rich red wine and coconut gravy, served with a saffron-infused risotto. The 'Koli-style Ceviche' was another standout, marrying the freshness of local seafood with zesty Latin American flavors. With its creative cocktails, attentive service, and a menu that pushes culinary boundaries, Fusion Flavors is definitely a must-visit for food enthusiasts looking to embark on a gastronomic adventure in Mumbai." date="March 10, 2024" />
                <Stories id="2" para= "One of life's most valuable lessons is the power of resilience in the face of adversity. Throughout our journey, we inevitably encounter obstacles, setbacks, and failures that test our resolve. It's during these challenging times that we learn the true measure of our character. The ability to bounce back, to view failures as opportunities for growth rather than insurmountable barriers, is what ultimately shapes our future. This resilience isn't about avoiding hardship, but rather about developing the mental fortitude to persevere through it. By embracing challenges and learning from our missteps, we not only become stronger individuals but also open ourselves up to new possibilities and personal growth. Remember, it's not the absence of difficulties that defines us, but how we rise above them that truly matters." date="November 7, 2023"/>
                <Stories id="3" para="Matheran, a quaint hill station nestled in the Western Ghats, offered a refreshing escape from the urban bustle. As we embarked on the toy train journey up the winding tracks, lush greenery and misty vistas unfolded before our eyes. The car-free environment was a welcome change, allowing us to explore the red-earth paths on foot and horseback. We marveled at panoramic viewpoints like Louisa Point and Charlotte Lake, breathing in the crisp mountain air. The tranquil atmosphere, punctuated only by the sounds of nature and the clip-clop of horses, provided a perfect setting for relaxation and introspection. Our stay in a colonial-era hotel added a touch of nostalgia to this serene getaway, making our Matheran trip a memorable blend of natural beauty and old-world charm." date="August 13, 2024"/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <QuestionAns ques= "How does friendship contribute to personal growth and well-being?" ans="Friendship plays a pivotal role in personal growth and well-being by providing emotional support, fostering a sense of belonging, and enhancing self-esteem. Friends offer different perspectives, challenge us to grow, and help us navigate life's challenges. They provide a safe space for expressing our thoughts and feelings, which can reduce stress and improve mental health. Through shared experiences and mutual encouragement, friendships can also boost our confidence and motivate us to pursue our goals. Overall, the bonds of friendship enrich our lives, making us feel more connected, understood, and supported." />
                <QuestionAns ques="How can couples maintain a strong emotional connection in a long-term relationship?" ans = "Maintaining a strong emotional connection in a long-term relationship requires ongoing effort and intentionality. Key strategies include prioritizing quality time together, engaging in open and honest communication about feelings and needs, and showing appreciation for each other regularly. Couples should also strive to support each other's individual growth while nurturing shared goals and experiences. Keeping the romance alive through small gestures, surprise acts of kindness, and maintaining physical intimacy is crucial. Additionally, navigating challenges together, practicing forgiveness, and continuously learning about each other can deepen the emotional bond. Remember, a strong connection is built on mutual respect, trust, and the willingness to evolve together as individuals and as a couple."/>
                <QuestionAns ques="How do we find true fulfillment in a world that often emphasizes external achievements and material success?" ans ="Finding true fulfillment in life often involves looking beyond external achievements and material success. It's about aligning our actions with our core values and passions, practicing gratitude for what we have, and pursuing personal growth. Cultivating meaningful relationships and contributing to something larger than ourselves can provide a deep sense of purpose. True fulfillment comes from living authentically and nurturing our inner selves, rather than solely chasing societal definitions of success. It's about creating a life that resonates with our true selves, balancing personal growth with meaningful connections and positive impact on the world around us. By focusing on these aspects, we can find lasting contentment and joy that goes beyond superficial measures of achievement." />
            </CustomTabPanel>
             </Container>
             </Container>
            </Container>
            <Divider variant="middle" component="li" style={{width: '80%'}}/>
            <Footer />
          </Container>
        </Container>
    </React.Fragment>
  );
}
