import React from 'react';

const ContactUs = () => {
  const styles = {
    container: {
      backgroundColor: 'linear-gradient(135deg, #ffe4e1, #ffcccb)',
      color: '#333',
      padding: '50px',
      borderRadius: '20px',
      maxWidth: '950px',
      margin: '100px auto',
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
    },
    heading: {
      color: '#ff69b4',
      fontSize: '40px',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
    },
    input: {
      padding: '10px',
      width: '80%',
      marginBottom: '15px',
      borderRadius: '10px',
      border: '2px solid #ff69b4',
    },
    textarea: {
      padding: '10px',
      width: '80%',
      height: '100px',
      marginBottom: '15px',
      borderRadius: '10px',
      border: '2px solid #ff69b4',
    },
    button: {
      backgroundColor: '#ff69b4',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '25px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
      textTransform: 'uppercase',
    },
    map: {
      marginTop: '40px',
      border: '0',
      width: '100%',
      height: '400px',
      borderRadius: '20px',
    },
    divider: {
      width: '60%',
      height: '2px',
      backgroundColor: '#ff69b4',
      margin: '20px auto',
    },
    footer: {
      marginTop: '50px',
      textAlign: 'center',
      backgroundColor: '#ffe4e1',
      padding: '20px',
      borderRadius: '15px',
      color: '#333',
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)',
    },
    contactInfo: {
      fontSize: '18px',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <div style={styles.divider}></div>
      <p>Have any questions or need help with our embroidery designs? Reach out to us, and we'll be happy to assist you!</p>
      
      {/* Contact Form */}
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      {/* Map Section */}
      <div style={styles.mapContainer}>
        <iframe
          title="Our Location"
          style={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.071332405326!2d144.9574439161138!3d-37.81720967975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d451d7f7e23%3A0x30b59408fa2fb933!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1600121234567!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <p style={styles.contactInfo}>📞 Contact Number: +1-234-567-890</p>
        <p style={styles.contactInfo}>📧 Email: info@threadloom.com</p>
        <p style={styles.contactInfo}>🏠 Address: 123 Embroidery St, Craft City, TX 12345</p>
        <p style={styles.contactInfo}>👤 Owner: Jane Doe</p>
      </div>
    </div>
  );
};

export default ContactUs;
