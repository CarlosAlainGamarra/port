import { useState } from 'react';
import './App.css';

//Assets
import  linkedin from './assets/icons/linkedin.svg'
import  github from './assets/icons/github.svg'
import  instagram from './assets/icons/instagram.svg'
import sun from './assets/icons/sun.png'
import moon from './assets/icons/moon.png'


//Components
import { AboutCard } from './components/AboutCard'
import Card from './components/Card';
import ContactCard from './components/ContactCard';
import Skills from './components/Skills';
import FireFlys from './components/FireFlys';




//App
const App = () => {
  //cursor
  const handleMouseMove = (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  };

  //Hooks
  const [theme, setTheme] = useState('dark');
  const [activeMenu, setActiveMenu] = useState('about');

  //Handlers & functions
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  

  return (
    <nav className={`app ${theme} `}  onMouseMove={handleMouseMove}>
      <div id="cursor" style={{ position: "absolute" }}></div>

      <FireFlys />

      <div className="menu">

        <img src={theme === "light"? moon : sun } alt="change -theme" onClick={toggleTheme} className="sunmoon"/>

        <ul className="menu-links">
          <li onClick={() => scrollToSection('about') & handleMenuClick('about')} className={activeMenu === 'about' ? 'active' : ''}>About</li>
          <li onClick={() => scrollToSection('skills') & handleMenuClick('skills')} className={activeMenu === 'skills' ? 'active' : ''}>Skills</li>
          <li onClick={() => scrollToSection('projects') & handleMenuClick('projects')} className={activeMenu === 'projects' ? 'active' : ''}>Projects</li>
          <li onClick={() => scrollToSection('contact') & handleMenuClick('contact')} className={activeMenu === 'contact' ? 'active' : ''}>Contact</li>
        </ul>

        <footer className="social-links">
          <a href="https://www.linkedin.com/in/carlos-alain-gamarra-164529207" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" width={35}/>
          </a>
          <a href="https://github.com/CarlosAlainGamarra" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" width={30}/>
          </a>
          <a href="https://www.instagram.com/alaingamarov/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" width={35}/>
          </a>
        </footer>  

      </div>
      <div className="content cursor">

        <About />
        <Skills />
        <Projects />
        <Contact />

      </div>
    </nav>
  );
};


//About
const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <AboutCard />
    </div>
        
  );
};


//Projects
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className='projects-container'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>     
    </div>
  );
};


//Contact
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <ContactCard />
    </div>
  );
};

export default App;









