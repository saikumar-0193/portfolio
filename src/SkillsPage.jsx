import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from './assets/profile.jpg';
import resume from './assets/saikumarresume.pdf';

const SkillsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleDownloadResume = () => {
    window.open(resume, '_blank');
  };

  const [resumeHover, setResumeHover] = useState(false);
  const [backHover, setBackHover] = useState(false);
  const [cardHoverIndex, setCardHoverIndex] = useState(null);

  const containerStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'flex-start',  // top align content vertically
  justifyContent: 'center',  // horizontally center
  background: 'linear-gradient(to right, #141e30, #243b55)',
  color: '#fff',
  padding: '40px 20px 20px 20px',  // more top padding
  boxSizing: 'border-box',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  overflowY: 'auto',  // allow vertical scroll if needed
  margin: 0,
};

const boxStyle = {
  backgroundColor: 'rgba(30,30,30,0.95)',
  borderRadius: '20px',
  padding: '30px',
  maxWidth: '1100px',
  width: '100%',
  display: 'flex',
  gap: '30px',
  flexWrap: 'wrap',
  boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
  overflow: 'hidden',
  marginTop: '10px',  // smaller gap from top
};

  const imageSection = {
    flex: '1 1 280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '170px',
  };

  const imageStyle = {
    width: '220px',
    height: '220px',
    borderRadius: '20px',
    objectFit: 'cover',
    border: '4px solid #00bcd4',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    marginBottom: '20px',
    transition: 'transform 0.3s ease',
  };

  const resumeButton = {
    backgroundColor: '#00bcd4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    whiteSpace: 'nowrap',
  };

  const resumeButtonHover = {
    backgroundColor: '#0097a7',
    transform: 'scale(1.05)',
  };

  const textSection = {
    flex: '2 1 700px',
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  };

  const backButtonStyle = {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    whiteSpace: 'nowrap',
  };

  const backButtonHover = {
    backgroundColor: '#388e3c',
    transform: 'scale(1.05)',
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
    background: 'linear-gradient(to right, #00bcd4, #4caf50)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const underline = {
    width: '60px',
    height: '4px',
    backgroundColor: '#00bcd4',
    marginBottom: '30px',
    borderRadius: '2px',
  };

  const skillRow = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  };

  const skillCard = {
    backgroundColor: '#2c2c2c',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
    height: '100%',
  };

  const skillCardHover = {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 28px rgba(0,0,0,0.7)',
  };

  const skillTitle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#00bcd4',
    marginBottom: '10px',
  };

  const skillList = {
    listStyleType: 'square',
    paddingLeft: '20px',
    color: '#ccc',
    lineHeight: '1.6',
  };

  const skills = [
    {
      title: 'Web Development',
      items: ['HTML, CSS, JavaScript', 'React.js (Hooks, Functional Components)', 'Node.js & Express.js', 'MongoDB, SQL', 'RESTful API Development'],
    },
    {
      title: 'Programming Languages',
      items: ['Java', 'JavaScript', 'Python (Beginner)'],
    },
    {
      title: 'Other Skills',
      items: ['Problem Solving (Leetcode, HackerRank)', 'Logical Reasoning', 'Time Management & Organization'],
    },
    {
      title: 'Tools & Frameworks',
      items: ['Git, GitHub', 'React Router', 'Redux (Learning)', 'XAMPP (PHP/MySQL)'],
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={imageSection}>
          <img
            src={profile}
            alt="Profile"
            style={imageStyle}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <button
            style={resumeHover ? { ...resumeButton, ...resumeButtonHover } : resumeButton}
            onClick={handleDownloadResume}
            onMouseEnter={() => setResumeHover(true)}
            onMouseLeave={() => setResumeHover(false)}
          >
            📄 Download Resume
          </button>
        </div>

        <div style={textSection}>
          <div style={buttonContainer}>
            <button
              style={backHover ? { ...backButtonStyle, ...backButtonHover } : backButtonStyle}
              onClick={handleBack}
              onMouseEnter={() => setBackHover(true)}
              onMouseLeave={() => setBackHover(false)}
            >
              ⬅ Back
            </button>
          </div>

          <h1 style={headingStyle}>My Skills</h1>
          <div style={underline}></div>

          <div style={skillRow}>
            {skills.map((skill, index) => (
              <div
                key={index}
                style={cardHoverIndex === index ? { ...skillCard, ...skillCardHover } : skillCard}
                onMouseEnter={() => setCardHoverIndex(index)}
                onMouseLeave={() => setCardHoverIndex(null)}
              >
                <h3 style={skillTitle}>{skill.title}</h3>
                <ul style={skillList}>
                  {skill.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
