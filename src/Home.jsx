import React from 'react';
import './App.css';
import complaintPortal from './assets/complaintPortal.png';
import expenseTracker from './assets/expenseTracker.jpg';
import profileImg from './assets/profile.jpg';
import TravelXpert from './assets/travel.png';

function Home() {
  const isMobile1 = window.innerWidth <= 768;
      const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

React.useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  const [columns, setColumns] = React.useState(window.innerWidth <= 768 ? 1 : 2);

React.useEffect(() => {
  const handleResize = () => {
    setColumns(window.innerWidth <= 768 ? 1 : 2);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);



  const containerStyle = {
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '140px 20px 40px 20px', // extra top padding for fixed navbar
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  padding: '12px 40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
};

const topBarStyle = {
  display: 'flex',
  justifyContent: 'flex-start', // aligned to the left
  alignItems: 'center',
  width: '100%',
  padding: '20px',
  // backgroundColor: 'rgba(0, 0, 0, 0.7)', // optional: adds slight background
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const logoStyle = {
  fontSize: '28px',
  fontWeight: 600,
  color: '#00bcd4', // your preferred color
  fontFamily: 'Segoe UI, sans-serif',
  display: isMobile ? 'none' : 'block',
  opacity: 0, // initial state before animation
};



const navContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  backgroundColor: 'transparent',
  marginTop: '10px',
  paddingRight: '0px',        // Make sure nothing pushes content inward
};

const navStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: isMobile ? '2px' : '20px',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: '100%',              // Ensure full width
  boxSizing: 'border-box',    // Prevent unexpected overflow/spacing
};
const navLinkStyle = {
  color: '#f0f0f0', // softer white
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: isMobile ? '13px' : '17px',
  padding: '6px 10px', // clickable area
  borderRadius: '6px',
  transition: 'all 0.3s ease-in-out',
};

const navLinkHover = {
  textDecoration: 'none',
  color: '#00e5ff',
  // backgroundColor: 'rgba(255, 255, 255, 0.1)', // subtle background on hover
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
  if (window.innerWidth <= 480) {
  imageStyle.width = '220px';
  imageStyle.height = '220px';
}

  const textSectionStyle = {
    maxWidth: '600px',
    textAlign: 'left',
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: '800',
    marginBottom: '20px',
    lineHeight: '1.2',
    color: '#ffffff',
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

  if (window.innerWidth <= 480) {
  Object.assign(headingStyle, {
    fontSize: '32px',
    textAlign: 'center',
  });

  Object.assign(paragraphStyle, {
    fontSize: '16px',
    textAlign: 'center',
  });

  Object.assign(buttonStyle, {
    fontSize: '15px',
    padding: '12px 20px',
  });

  Object.assign(textSectionStyle, {
    maxWidth: '100%',
    textAlign: 'center',
  });
}



 const headStyle = {
  textAlign: 'center',
  fontSize: '38px',
  fontWeight: '700',
  marginBottom: '50px',
  fontFamily: 'Montserrat, sans-serif',
  color: '#00e5ff',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 20px',
};

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  padding: '30px',
  borderRadius: '12px',
  border: '1px solid rgba(0, 229, 255, 0.2)',
  boxShadow: '0 4px 15px rgba(0, 229, 255, 0.1)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '220px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
};

const skillCategoryTitleStyle = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#00e5ff',
  marginBottom: '20px',
  fontFamily: 'Montserrat, sans-serif',
  textTransform: 'capitalize',
};

const skillListContainerStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
  textAlign: 'center',
  width: '100%',
};

const skillListItemStyle = {
  fontSize: '18px',
  color: '#e0e0e0',
  marginBottom: '10px',
  fontFamily: 'Open Sans, sans-serif',
  lineHeight: '1.4',
  padding: '3px 0',
  transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out',
};

const beginnerTagStyle = {
  fontSize: '14px',
  color: '#999999',
  marginLeft: '8px',
  fontWeight: 'normal',
  fontStyle: 'italic',
};
if (window.innerWidth <= 480) {
  gridContainerStyle.gridTemplateColumns = '1fr';
  gridContainerStyle.padding = '0 10px';
  cardStyle.minHeight = 'auto';
  cardStyle.padding = '20px';
  headStyle.fontSize = '28px';
  skillCategoryTitleStyle.fontSize = '20px';
  skillListItemStyle.fontSize = '16px';
}

const sectionStyle = {
  marginTop: '100px',
  padding: '40px 20px',
};
const gridContainerStyle1 = {
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: '30px',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '20px',
};

const cardStyle1 = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)', // transparent white
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  padding: '15px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)', // optional: frosted glass effect
  color: '#fff', // if background is dark
};
const skillListContainerStyle1 = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  margin: '10px 0',
};
const skillListItemStyle1 = {
  marginBottom: '10px',
  lineHeight: '1.6',
  fontSize: '16px',
  color: '#f0f0f0', // adjust for visibility on dark background
};
const containerStyle3 = {
  width: '100%',
  maxWidth: isMobile ? '90%' : '600px',
  margin: '0 auto', // removes top margin
  paddingTop: isMobile ? '10px' : '20px', // small top padding
  paddingBottom: isMobile ? '10px' : '30px',
  paddingLeft: isMobile ? '10px' : '30px',
  paddingRight: isMobile ? '10px' : '30px',
  backgroundColor: isMobile ? 'transparent' : '#1c1c1e',
  borderRadius: isMobile ? '0px' : '12px',
  boxShadow: isMobile ? 'none' : '0 0 10px rgba(0,0,0,0.3)',
  //changing something
};

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: isMobile ? '14px' : '16px',
    color: '#fff',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    fontSize: '16px',
  };

  const buttonStyle3 = {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
  };
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
    <div style={topBarStyle}>
      <div style={logoStyle} className='logo'>Saikumar Reddy</div>
    </div>

    <nav style={navContainerStyle}>
      <ul style={navStyle}>
        {['Home', 'Skills', 'Projects', 'Contact'].map((text, index) => (
          <li key={index}>
            <a
              href={text === 'Home' ? '#' : `#${text.toLowerCase()}`}
              style={navLinkStyle}
              onMouseOver={(e) => Object.assign(e.target.style, navLinkHover)}
              onMouseOut={(e) => Object.assign(e.target.style, navLinkStyle)}
            >
              {text}
            </a>
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
     a passionate MERN stack developer committed to building scalable, intuitive, and user-focused web applications. I specialize in writing clean, 
     maintainable code and crafting seamless user interfaces that solve real-world challenges through technology.
    </p>
    <a href="#about" style={{ textDecoration: 'none' }}>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        Explore Now
      </button>
    </a>

    {/* Social Links */}
    <div style={{ marginTop: '24px', display: 'flex', gap: '20px', alignItems: 'center' }}>
      <a href="https://github.com/saikumar-0193" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          style={{ width: '32px', height: '32px', filter: 'invert(1)', cursor: 'pointer' }}
        />
      </a>
      <a href="https://linkedin.com/in/saikumar0193" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn"
          style={{ width: '32px', height: '32px', cursor: 'pointer' }}
        />
      </a>
    </div>
  </div>
</main>

<section id="journey" style={{ marginTop: '100px', padding: '20px' }}>
  <h2 style={{
    textAlign: 'center',
    fontSize: '38px',
    fontWeight: '700',
    marginBottom: '50px',
    fontFamily: 'Montserrat, sans-serif',
    color: '#00e5ff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  }}>My Journey</h2>

  <div style={{
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 0',
  }}>
    {/* Center vertical line */}
    <div style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '50%',
      width: '4px',
      backgroundColor: '#00e5ff',
      transform: 'translateX(-50%)',
      zIndex: 1,
    }}></div>

    {/* Timeline entries */}
    {[
      { year: "2025", description: "Contributing to open source & building full-stack MERN apps." },
      { year: "2024", description: "Built ComplaintPortal, TravelXpert. Internship at Internship Studio." },
      { year: "2023", description: "Focused on backend: Node.js, MongoDB, Express." },
      { year: "2022", description: "Created ExpenseTracker. Learned React & JavaScript." },
      { year: "2021", description: "Completed Intermediate. Learned Java basics." },
      { year: "School", description: "Top scores in SSC. Participated in science fairs & Olympiads." },
    ].map((item, index) => {
      const isLeft = index % 2 === 0;
      return (
        <div key={index} style={{
          position: 'relative',
          width: '100%',
          marginBottom: '60px',
          display: 'flex',
          justifyContent: isLeft ? 'flex-start' : 'flex-end',
          alignItems: 'center',
        }}>
          {/* Blue Dot */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 0)',
            width: '16px',
            height: '16px',
            backgroundColor: '#00e5ff',
            borderRadius: '50%',
            zIndex: 2,
            boxShadow: '0 0 12px #00e5ff',
          }}></div>

          {/* Content Box */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '20px 24px',
            borderRadius: '10px',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            boxShadow: '0 4px 10px rgba(0,229,255,0.05)',
            width: '44%',
            color: '#fff',
            fontFamily: 'Segoe UI, sans-serif',
            textAlign: 'left',
            zIndex: 2,
          }}>
            <h3 style={{
              fontSize: '20px',
              color: '#00e5ff',
              marginBottom: '10px',
              fontWeight: '600',
            }}>{item.year}</h3>
            <p style={{ fontSize: '16px', color: '#ccc', lineHeight: '1.6' }}>
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>






















      
     <section id="skills" style={{ marginTop: '100px', padding: '20px' }}>
  <h2 style={headStyle}>Skills</h2>
  <div style={gridContainerStyle}>

    {/* Programming Languages Card */}
    <div style={cardStyle}>
      <h3 style={skillCategoryTitleStyle}>Programming Languages</h3>
      <ul style={skillListContainerStyle}>
        <li style={skillListItemStyle}>Java</li>
        <li style={skillListItemStyle}>
          Python <span style={beginnerTagStyle}>(beginner)</span>
        </li>
        <li style={skillListItemStyle}>JavaScript</li>
      </ul>
    </div>

    {/* Frontend Card */}
    <div style={cardStyle}>
      <h3 style={skillCategoryTitleStyle}>Frontend</h3>
      <ul style={skillListContainerStyle}>
        <li style={skillListItemStyle}>HTML</li>
        <li style={skillListItemStyle}>CSS</li>
        <li style={skillListItemStyle}>React</li>
        <li style={skillListItemStyle}>Bootstrap</li>
      </ul>
    </div>

    {/* Backend Card */}
    <div style={cardStyle}>
      <h3 style={skillCategoryTitleStyle}>Backend</h3>
      <ul style={skillListContainerStyle}>
        <li style={skillListItemStyle}>Node.js</li>
        <li style={skillListItemStyle}>Express.js</li>
        <li style={skillListItemStyle}>Rest Api</li>
      </ul>
    </div>

    {/* Databases Card */}
    <div style={cardStyle}>
      <h3 style={skillCategoryTitleStyle}>Databases</h3>
      <ul style={skillListContainerStyle}>
        <li style={skillListItemStyle}>MongoDB</li>
        <li style={skillListItemStyle}>SQL</li>
      </ul>
    </div>
    <div style={cardStyle}>
      <h3 style={skillCategoryTitleStyle}>Version Control Systems</h3>
      <ul style={skillListContainerStyle}>
        <li style={skillListItemStyle}>Git</li>
        <li style={skillListItemStyle}>Github</li>
      </ul>
    </div>
    

  </div>
</section>

      {/* Projects Section */}
      <section id="projects" style={{ marginTop: '100px', padding: '20px' }}>
  <h2 style={headStyle}>Projects</h2>
  <div style={gridContainerStyle1}>

    
    <div style={cardStyle1}>
<img
  src={TravelXpert}
  alt="TravelXpert Preview"
  style={{
    width: '100%',
    height: isMobile1 ? '120px' : '250px', // reduced height for mobile
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  }}
/>  <h3 style={skillCategoryTitleStyle}>TravelXpert</h3>
  
  <ul style={skillListContainerStyle1}>
    <li style={skillListItemStyle1}>Built a responsive travel website to help tourists explore top destinations, stays, and transport options.</li>
    <li style={skillListItemStyle1}>Designed an intuitive UI with navigation, search functionality, and organized travel sections.</li>
    <li style={skillListItemStyle1}>Integrated a login system to enable personalized user experiences (in progress).</li>
  </ul>

  {/* Tech Stack Pills */}
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
    {['HTML', 'CSS', 'JavaScript','React'].map((tech) => (
      <span
        key={tech}
        style={{
          backgroundColor: '#2d2d2d',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '20px',
          fontSize: '14px',
          border: '1px solid #555',
        }}
      >
        {tech}
      </span>
    ))}
  </div>

  {/* GitHub Logo Link */}
 <a 
  href="https://github.com/saikumar-0193/travelXpert-" 

  target="_blank" 
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    marginTop: '16px',
    padding: '10px',
    backgroundColor: '#007bff', // blue background
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0, 123, 255, 0.4)',
    transition: 'transform 0.2s, background-color 0.3s',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.backgroundColor = '#0056b3'; // darker blue on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.backgroundColor = '#007bff'; // original blue
  }}
>
  <img 
    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
    alt="GitHub Repository" 
    style={{ width: '36px', height: '36px', filter: 'invert(1)' }} 
  />
</a>


</div>




    
   <div style={cardStyle1}>
  <img
  src={expenseTracker}
  alt="TravelXpert Preview"
  style={{
    width: '100%',
    height: isMobile1 ? '100px' : '250px',
     
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  }}
/> 
  <h3 style={skillCategoryTitleStyle}>ExpenseTracker</h3>
  
  <ul style={skillListContainerStyle1}>
    <li style={skillListItemStyle1}>Built a web-based expense tracker to help users monitor daily spending with ease.</li>
    <li style={skillListItemStyle1}>Implemented add, delete, and category-wise tracking of transactions with real-time updates.</li>
    <li style={skillListItemStyle1}>Designed a clean, user-friendly UI for seamless financial record management.</li>
  </ul>

  {/* Tech Stack Pills */}
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
    {['HTML', 'CSS', 'JavaScript',].map((tech) => (
      <span
        key={tech}
        style={{
          backgroundColor: '#2d2d2d',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '20px',
          fontSize: '14px',
          border: '1px solid #555',
        }}
      >
        {tech}
      </span>
    ))}
  </div>

  {/* GitHub Logo Link */}
 <a 
  href="https://github.com/saikumar-0193/expenseTracker"

  target="_blank" 
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    marginTop: '16px',
    padding: '10px',
    backgroundColor: '#007bff', // blue background
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0, 123, 255, 0.4)',
    transition: 'transform 0.2s, background-color 0.3s',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.backgroundColor = '#0056b3'; // darker blue on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.backgroundColor = '#007bff'; // original blue
  }}
>
  <img 
    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
    alt="GitHub Repository" 
    style={{ width: '36px', height: '36px', filter: 'invert(1)' }} 
  />
</a>


</div>

   
  <div style={cardStyle1}>
  <img
  src={complaintPortal}
  alt="TravelXpert Preview"
  style={{
    width: '100%',
    height: isMobile1 ? '120px' : '250px', // reduced height for mobile
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  }}
/> 
  <h3 style={skillCategoryTitleStyle}>ComplaintPortal</h3>
  
  <ul style={skillListContainerStyle1}>
    <li style={skillListItemStyle1}>Developed a complaint management portal to help users report civic issues like water, waste problems.</li>
    <li style={skillListItemStyle1}>Implemented a login and registration system with data submission linked to user identity.</li>
    <li style={skillListItemStyle1}>Created dynamic forms for different issue categories and stored data in a backend database for tracking.</li>
  </ul>

  {/* Tech Stack Pills */}
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
    {['React','Node','Express','Mongodb'].map((tech) => (
      <span
        key={tech}
        style={{
          backgroundColor: '#2d2d2d',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '20px',
          fontSize: '14px',
          border: '1px solid #555',
        }}
      >
        {tech}
      </span>
    ))}
  </div>

  {/* GitHub Logo Link */}
 <a 
  href="https://github.com/saikumar-0193/complaintPortal" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    marginTop: '16px',
    padding: '10px',
    backgroundColor: '#007bff', // blue background
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0, 123, 255, 0.4)',
    transition: 'transform 0.2s, background-color 0.3s',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.backgroundColor = '#0056b3'; // darker blue on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.backgroundColor = '#007bff'; // original blue
  }}
>
  <img 
    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
    alt="GitHub Repository" 
    style={{ width: '36px', height: '36px', filter: 'invert(1)' }} 
  />
</a>


</div>
    

  </div>
</section>

      {/* Contact Section */}
      <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '20px', color: '#fff' }}>
  Get in Touch
</h2>
   <section
  id="contact"
  style={{
    padding: '40px 20px',
    maxWidth: '600px',
    margin: '0 auto 80px auto',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#fff',
  }}
>
  <form
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}
  >
    <input
      type="text"
      name="name"
      placeholder="Name"
      style={{
        padding: '14px',
        border: 'none',
        borderBottom: '2px solid #555',
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: '16px',
        transition: 'border-color 0.3s',
        outline: 'none',
      }}
      onFocus={(e) => (e.currentTarget.style.borderBottom = '2px solid #007bff')}
      onBlur={(e) => (e.currentTarget.style.borderBottom = '2px solid #555')}
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      style={{
        padding: '14px',
        border: 'none',
        borderBottom: '2px solid #555',
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: '16px',
        transition: 'border-color 0.3s',
        outline: 'none',
      }}
      onFocus={(e) => (e.currentTarget.style.borderBottom = '2px solid #007bff')}
      onBlur={(e) => (e.currentTarget.style.borderBottom = '2px solid #555')}
    />

    <textarea
      name="message"
      placeholder="Message"
      rows="5"
      style={{
        padding: '14px',
        border: '1px solid #555',
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: '16px',
        borderRadius: '8px',
        outline: 'none',
        resize: 'vertical',
        transition: 'border-color 0.3s',
      }}
      onFocus={(e) => (e.currentTarget.style.border = '1px solid #007bff')}
      onBlur={(e) => (e.currentTarget.style.border = '1px solid #555')}
    ></textarea>

    <button
      type="submit"
      style={{
        padding: '14px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
    >
      Submit
    </button>
  </form>
</section>






   {/* Footer Section */}
<footer
  style={{
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    padding: '40px 20px 20px',
    color: '#f0f0f0',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    marginTop: '100px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  }}
>
  <h2
    style={{
      fontSize: '22px',
      fontWeight: '600',
      color: '#00e5ff',
      marginBottom: '12px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }}
  >
    Let’s Connect
  </h2>

  <div style={{ maxWidth: '500px', margin: '0 auto' }}>
    <p style={{ fontSize: '16px', color: '#cccccc', marginBottom: '20px' }}>
      Open to freelance work, collaborations, or just a friendly chat.
    </p>
  </div>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      marginBottom: '25px',
      flexWrap: 'wrap',
    }}
  >
    <a
      href="mailto:saikumarcse193@gmail.com"
      style={{
        color: '#00e5ff',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.color = '#76ff03')}
      onMouseOut={(e) => (e.currentTarget.style.color = '#00e5ff')}
    >
      saikreddy1919@gmail.com
    </a>
    <a
      href="https://linkedin.com/in/saikumar0193"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#00e5ff',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.color = '#76ff03')}
      onMouseOut={(e) => (e.currentTarget.style.color = '#00e5ff')}
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/saikumar-0193"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#00e5ff',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.color = '#76ff03')}
      onMouseOut={(e) => (e.currentTarget.style.color = '#00e5ff')}
    >
      GitHub
    </a>
  </div>

  <hr
    style={{
      border: '0.5px solid rgba(255,255,255,0.1)',
      margin: '20px auto',
      maxWidth: '400px',
    }}
  />

  <p style={{ fontSize: '14px', color: '#888' }}>
    © {new Date().getFullYear()}{' '}
    <span style={{ color: '#00e5ff' }}>Saikumar Reddy</span>. All rights reserved.
  </p>
</footer>




    </div>
  );
}

export default Home;
