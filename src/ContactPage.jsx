import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form fields
    // TODO: Add logic to send form data to a backend or email service
  };

  return (
    <div style={styles.container}>
      {/* Back Button */}
      <div style={styles.backButtonWrapper}>
        <button onClick={() => navigate(-1)} style={styles.backButton}>← Back</button>
      </div>

      <h1 style={styles.heading}>Let's Connect</h1>

      {/* Contact Info Section */}
      <div style={styles.infoSection}>
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>📞 Call Us</h3>
          <p style={styles.infoText}>7993930863</p>
        </div>
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>📧 Email</h3>
          <p style={styles.infoText}>saikumar@gmail.com</p>
        </div>
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>📍 Visit Us</h3>
          <p style={styles.infoText}>Tirupati,India</p>
        </div>
      </div>

      {/* Contact Form */}
      <div style={styles.formWrapper}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.formHeading}>Send a Message</h2>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>

      {/* Confirmation Message */}
      {submitted && (
        <div style={styles.confirmation}>
          🎉 Thank you for reaching out! We’ll get back to you shortly.
        </div>
      )}

      {/* Social Media Links */}
      <div style={styles.socialSection}>
        <h3 style={styles.socialHeading}>Follow Us</h3>
        <div style={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/saikumar0193" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '50px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f9f9f9',
    position: 'relative',
  },
  backButtonWrapper: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  backButton: {
    padding: '10px 15px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '30px',
    color: '#333',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '50px',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '250px',
  },
  infoTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#00bcd4',
  },
  infoText: {
    color: '#000', // Set to black
  },
  formWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  formHeading: {
    marginBottom: '20px',
    fontSize: '24px',
    textAlign: 'center',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '120px',
    resize: 'vertical',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00bcd4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  confirmation: {
    textAlign: 'center',
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '15px',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '0 auto 30px auto',
  },
  socialSection: {
    textAlign: 'center',
    marginTop: '30px',
  },
  socialHeading: {
    fontSize: '22px',
    marginBottom: '10px',
    color: '#444',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  link: {
    color: '#00bcd4',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
};

export default ContactPage;
