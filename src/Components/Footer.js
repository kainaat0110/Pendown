import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <h2 style={styles.title}>PenDown</h2>
        
        <div style={styles.socialIcons}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaLinkedin /></a>
          <a href="https://github.com/kainaat0110/Pendown.git" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaGithub /></a>

        </div>
        
        <p style={styles.copyright}>© {new Date().getFullYear()} PenDown. All rights reserved.</p>
        
        <p style={styles.tagline}>"Express yourself freely, ask openly, learn endlessly."</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'transparent',
    padding: '0 0',
    borderTop: '1px solid #e7e7e7',
  },
  content: {
    maxWidth: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
  },
  links: {
    marginBottom: '15px',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    margin: '0 10px',
  },
  socialIcons: {
    marginBottom: '15px',
  },
  icon: {
    color: '#333',
    fontSize: '20px',
    margin: '0 10px',
  },
  copyright: {
    fontSize: '14px',
    color: '#666',
  },
  tagline: {
    fontStyle: 'italic',
    color: '#666',
  },
};

export default Footer;