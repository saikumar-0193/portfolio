import React from 'react';
import { useNavigate } from 'react-router-dom';
import myProfile from './assets/myprofile.jpg';

const AboutMe = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const containerStyle = {
    backgroundColor: '#0f1117',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '60px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    backgroundColor: '#1c1f26',
    borderRadius: '20px',
    padding: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    maxWidth: '1100px',
    width: '100%',
    marginTop: '40px',
  };

  const backButtonStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: '#00bcd4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 18px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'transform 0.2s ease, background 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 188, 212, 0.3)',
  };

  const backButtonHover = {
    transform: 'scale(1.05)',
    backgroundColor: '#0097a7',
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: '800',
    marginBottom: '20px',
    color: '#ffffff',
    textShadow: '0 0 10px #00bcd4, 0 0 20px #00bcd4',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#ccc',
    maxWidth: '600px',
  };

  const imageStyle = {
    width: '320px',
    height: '320px',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <button
        style={{ ...backButtonStyle, ...(hover ? backButtonHover : {}) }}
        onClick={handleBack}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        ⬅ Back
      </button>

      <div style={cardStyle}>
        <div>
          <h1 style={headingStyle}>About Me</h1>
          <p style={paragraphStyle}>
            Hello! I’m <strong>Saikumar Reddy</strong>, a passionate and creative full-stack developer with a focus on building seamless and high-performance web applications. I specialize in frontend technologies like <strong>React</strong> and backend tools such as <strong>Node.js</strong> and <strong>Express</strong>. <br /><br />
            With a strong foundation in the <strong>MERN stack</strong>, I love transforming ideas into user-friendly experiences. Whether it's solving real-world problems or exploring new tech, I always aim to write clean, efficient, and scalable code.
          </p>
        </div>

        <img
          src={myProfile}
          alt="Saikumar Reddy Profile"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default AboutMe;
