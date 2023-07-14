//Assets
import "./AboutCard.css";
import carlosgamarra from "../assets/images/carlosgamarra.jpg";
import up from "../assets/icons/up.svg";
import down from "../assets/icons/down.svg";


import { useState, useRef } from "react";

export const AboutCard = () => {
  //Hooks
  const [isExpanded, setIsExpanded] = useState(false);


  //handlers & functions
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


  //Scroll
  const scrollContainerRef = useRef(null);

  const handleScrollUp = () => {
    scrollContainerRef.current.scrollTop -= 100;
  };

  const handleScrollDown = () => {
    scrollContainerRef.current.scrollTop += 100;
  };

  return (
    <>
      <div className='aboutcard'>
        <div className='aboutcard-image-container'>
          <img
            src={carlosgamarra}
            alt='CarlosGamarra'
            className='aboutcard-image'
          />
        </div>

        <div className='aboutcard-content'>
          <h2 className='aboutcard-title'>Carlos Gamarra</h2>
          <div>
            <h3 className='aboutcard-paragraph'>
              Web developer
            </h3>
          </div>
          <div onClick={handleToggle} className='about-button'>
            {isExpanded ? "Less..." : "Moore..."}
          </div>
        </div>
      </div>

      {isExpanded &&  (
        <div className={'toggle-open'}>
          <img src={up} className='scroll-up' onClick={handleScrollUp} />

          <img src={down} className='scroll-down' onClick={handleScrollDown} />

          <div
            className='aboutcard-content intro'
            ref={scrollContainerRef}
            style={{ height: "300px", overflow: "hidden" }}
          >
            <p>
              Hi there! Im a creative and enthusiastic web developer with a passion for building responsive and
              user-friendly websites. I have experience in HTML, CSS, JavaScript, and
              React. I enjoy turning complex problems into simple, beautiful, and
              intuitive solutions, focused on creating and maintaining high-performance applications
              under a well-organized architecture. Proactive, collaborative and
              a team worker.
            </p>
            <br />
            <br />
            <h3>EDUCATION</h3>
            <h4>Universidad Central de Venezuela (VE)</h4>
            <ul>
              <p>Structural engineer</p>
              <p>Structural design modules through software</p>
              <p>Informatics for engineers</p>
            </ul>
            <br />
            <h4>Universidad Tecnológica Nacional (AR)</h4>
            <p>Introduction to backend development with Node.js</p>
            <br />
            <h4>UDEMY</h4>
            <p>Universidad de desarrollo web. FrontEnd developer</p>
            <br />
            <h3>Skills</h3>
            <ul>
              <p>English</p>
              <p>Troubleshooting and quality control</p>
              <p>Agile process</p>
              <p>Self taught. Enthusiastic about learning new technologies</p>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutCard;
