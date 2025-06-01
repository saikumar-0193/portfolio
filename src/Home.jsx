import { Link } from 'react-router-dom';
import './App.css';
import profileImg from './assets/profile.jpg';

function Home() {
  const containerStyle = {
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headerStyle = {
    backgroundColor: '#ffffff10',
    borderRadius: '16px',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    margin: '0 auto 40px auto',
    maxWidth: '1200px',
  };

  const logoStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#00e5ff',
    letterSpacing: '1px',
  };

  const navStyle = {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const navLinkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '17px',
    transition: 'all 0.3s ease',
  };

  const navLinkHover = {
    textDecoration: 'underline',
    color: '#00e5ff',
  };

  const mainStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60px',
    marginTop: '40px',
    padding: '0 20px',
  };

  const imageStyle = {
    width: '340px',
    height: '340px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '6px solid #00e5ff',
    boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
    transition: 'transform 0.4s ease',
  };

  const textSectionStyle = {
    maxWidth: '600px',
    textAlign: 'left',
  };

  const headingStyle = {
  fontSize: '48px',
  fontWeight: '800',
  marginBottom: '20px',
  lineHeight: '1.2',
  color: '#ffffff', // or any solid color you prefer
};

  const paragraphStyle = {
    fontSize: '19px',
    color: '#d0d0d0',
    lineHeight: '1.8',
    marginBottom: '24px',
  };

  const buttonStyle = {
    padding: '14px 28px',
    fontSize: '17px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #00e5ff, #76ff03)',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={logoStyle}>Saikumar Reddy</div>
        <nav>
          <ul style={navStyle}>
            {['Home', 'Skills', 'About Me', 'Contact'].map((text, index) => (
              <li key={index}>
                <Link
                  to={`/${text === 'Home' ? '' : text.toLowerCase().replace(' ', '')}`}
                  style={navLinkStyle}
                  onMouseOver={(e) => Object.assign(e.target.style, navLinkHover)}
                  onMouseOut={(e) => Object.assign(e.target.style, navLinkStyle)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main style={mainStyle}>
        <img
          src={profileImg}
          alt="Profile"
          style={imageStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
        />
        <div style={textSectionStyle}>
          <h1 style={headingStyle}>
            Hello, I'm <br /><span>Saikumar Reddy</span>
          </h1>
          <p style={paragraphStyle}>
            I'm a dedicated MERN stack developer passionate about building dynamic, user-friendly web experiences.
            My focus is on clean code, smooth UI, and solving real-world problems through technology.
          </p>
          <Link to="/aboutme" style={{ textDecoration: 'none' }}>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Explore Now
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
