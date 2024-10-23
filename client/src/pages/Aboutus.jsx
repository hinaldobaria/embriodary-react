import React from 'react';
import { Link } from "react-router-dom";
const AboutUs = () => {
  const styles = {
    container: {
      backgroundColor: 'linear-gradient(135deg, #ffe4e1, #ffcccb)', // Subtle gradient
      color: '#333', // Darker text for better contrast
      padding: '50px',
      borderRadius: '20px',
      maxWidth: '950px', // Slightly wider
      margin: '100px auto',
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
    },
    heading: {
      color: '#ff69b4', // Hot pink for a vibrant heading
      fontSize: '40px', // Slightly larger heading
      marginBottom: '20px',
      fontWeight: 'bold', // Add bold weight
    },
    paragraph: {
      fontSize: '20px', // Slightly larger font size for readability
      marginBottom: '20px',
      lineHeight: '1.75', // Increased line height for better readability
    },
    divider: {
      width: '60%',
      height: '2px',
      backgroundColor: '#ff69b4', // Matching the theme color
      margin: '20px auto',
    },
    button: {
      backgroundColor: '#ff69b4',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '25px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '20px',
      textTransform: 'uppercase',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <div style={styles.divider}></div>
      <p style={styles.paragraph}>
      Welcome to our adorable world of embroidery designs! We offer a wide range of beautifully crafted patterns for your projects. Whether you're an expert or just getting started, you can download our designs for personal or commercial use.
      </p>
      <p style={styles.paragraph}>
        Our mission is to make creativity accessible to everyone through easy-to-use digital designs. Start exploring and bring your ideas to life with our charming embroidery collection!
      </p>
      <p style={styles.paragraph}>
        We love supporting creative projects and are excited to be a part of your journey.
      </p>

      <Link to="/" style={styles.button}>Explore Designs</Link>
    </div>
  );
};

export default AboutUs;
