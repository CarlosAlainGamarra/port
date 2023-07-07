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
          <h className='aboutcard-title'>Carlos Gamarra</h>
          <div>
            <p className='aboutcard-paragraph'>
              Hi! I am a creative and enthusiastic FrontEnd web developer.
              Proficient in HTML, CSS, JavaScript and React.
            </p>
          </div>

          <div onClick={handleToggle} className='about-button'>
            {isExpanded ? "Less..." : "Moore..."}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className='toggle-open'>
          <img src={up} className='scroll-up' onClick={handleScrollUp} />

          <img src={down} className='scroll-down' onClick={handleScrollDown} />

          <div
            className='aboutcard-content intro'
            ref={scrollContainerRef}
            style={{ height: "300px", overflow: "hidden" }}
          >
            <p>
              Focused on creating and maintaining high-performance applications
              under a well-organized architecture. Proactive, collaborative and
              able to function well in a team.
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
            <p>
              Focused on creating and maintaining high-performance applications
              under a well-organized architecture. Proactive, collaborative and
              able to function well in a team.
            </p>
            <br />
            <h3>EDUCATION</h3>
            <h4>Universidad Central de Venezuela (VE)</h4>
            <ul>
              <p>Structural engineer</p>
              <p>Structural design modules through software</p>
              <p>Informatics for engineers</p>
            </ul>
            <h4>Universidad Tecnológica Nacional (AR)</h4>
            <p>Introduction to backend development with Node.js</p>
            <h4>UDEMY</h4>
            <p>Universidad de desarrollo web. FrontEnd developer</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutCard;
