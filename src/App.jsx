import { useState } from 'react';
import './App.css';

//Assets
import  linkedin from './assets/icons/linkedin.svg'
import  github from './assets/icons/github.svg'
import  instagram from './assets/icons/instagram.svg'
import sun from './assets/icons/sun.png'
import moon from './assets/icons/moon.png'

import barca from './assets/images/barca.jpg'

//Skills
import js from './assets/images/js.svg'
import react from './assets/images/react.svg'
import html5 from './assets/images/html.svg'
import css from './assets/images/css.svg'
import nodejs from './assets/images/nodejs.svg'
import mongodb from './assets/images/mongodb.png'

//Components
import { AboutCard } from './components/AboutCard'
import Card from './components/Card';
import ContactCard from './components/ContactCard';



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


      <div className="lucy" style={{ top: '40px', left: '40px'}}/>
      <div className="lucy" style={{ top: '100px', left: '100px'}}/>
      <div className="lucy" style={{ top: '400px', left: '600px'}}/>
      <div className="lucy" style={{ top: '70px', left: '500px'}}/>
      <div className="lucy" style={{ top: '700px', left: '900px'}}/>
      <div className="lucy" style={{ top: '500px', left: '700px'}}/>
      <div className="lucy" style={{ top: '300px', left: '800px'}}/>
      <div className="lucy" style={{ bottom: '20px', left: '10px'}}/>
      <div className="lucy" style={{ bottom: '10px', left: '-80px'}}/>
      <div className="lucy" style={{ top: '40px', left: '-40px'}}/>
      <div className="lucy" style={{ top: '10px', left: '-80px'}}/>




      <div className="menu">

        <img src={theme === "light"? moon : sun } alt="change -theme" onClick={toggleTheme} className="sunmoon"/>

        <ul className="menu-links">
          <li onClick={() => scrollToSection('about') & handleMenuClick('about')} className={activeMenu === 'about' ? 'active' : ''}>About</li>
          <li onClick={() => scrollToSection('skills') & handleMenuClick('skills')} className={activeMenu === 'skills' ? 'active' : ''}>Skills</li>
          <li onClick={() => scrollToSection('projects') & handleMenuClick('projects')} className={activeMenu === 'projects' ? 'active' : ''}>Projects</li>
          <li onClick={() => scrollToSection('contact') & handleMenuClick('contact')} className={activeMenu === 'contact' ? 'active' : ''}>Contact</li>
        </ul>

        <footer className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" width={35}/>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" width={30}/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
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


//skills
const Skills = () => {
  return (  
  <div id="skills">
    <h2>Skills</h2>
    <div className='skills-container'>
      <div className="skillcard"> 
        <div className="skillcard-content">
          <div className="cskillcard-image-container">
            <img src={js} alt="javascript" className="skillcard-image" />
          </div>        
            <h3 className="skillcard-title">JavaScript</h3>
        </div>
      </div>

      <div className="skillcard"> 
        <div className="skillcard-content">
          <div className="cskillcard-image-container">
            <img src={react} alt="react" className="skillcard-image" />
          </div>        
            <h3 className="skillcard-title">React</h3>
        </div>
      </div>

      <div className="skillcard"> 
        <div className="skillcard-content">
          <div className="cskillcard-image-container">
            <img src={html5} alt="html5" className="skillcard-image" />
          </div>        
            <h3 className="skillcard-title">HTML</h3>
        </div>
      </div>

      <div className="skillcard"> 
        <div className="skillcard-content">
          <div className="cskillcard-image-container">
            <img src={css} alt="css" className="skillcard-image" />
          </div>        
            <h3 className="skillcard-title">CSS</h3>
        </div>
      </div>

      <div className="skillcard"> 
        <div className="skillcard-content">
          <div className="cskillcard-image-container">
            <img src={nodejs} alt="nodejs" className="skillcard-image" />
          </div>        
            <h3 className="skillcard-title">Nodejs</h3>
        </div>
      </div>

      <div className="skillcard"> 
        <div className="skillcard-content">
          <div className="cskillcard-image-container">
            <img src={mongodb} alt="mongodb" className="skillcard-image" />
          </div>        
            <h3 className="skillcard-title">Mongodb</h3>
        </div>
      </div>

    </div>
  </div>
  );
};


//Projects
const Projects = () => {
  const title = 'hola'
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className='projects-container'>
        <Card image={barca} title={title}/>
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









