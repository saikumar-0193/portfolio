import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import ContactPage from './ContactPage';
import Home from './Home';
import SkillsPage from './SkillsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element = {<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
