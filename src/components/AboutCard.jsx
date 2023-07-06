//Assets
import './AboutCard.css'
import carlosgamarra from '../assets/images/carlosgamarra.jpg'

import { useState } from 'react'

export const AboutCard = () => {

  const [isExpanded, setIsExpanded] = useState(false)


  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  };



  return (
    <>
      <div className="aboutcard">
        <div className="aboutcard-image-container">
          <img src={carlosgamarra} alt="CarlosGamarra" className="aboutcard-image" />
        </div>

        <div className="aboutcard-content">
          <h className="aboutcard-title">Carlos Gamarra</h>
          <div>
            <p className="aboutcard-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan turpis nec varius lobortis.
            </p>  
          </div>

        <div onClick={handleToggle} className="about-button">
          {isExpanded ? 'Less...' : 'Moore...'}
        </div>

        </div>


      </div >
        {isExpanded && (
          <div className="aboutcard toggle-open">
            <div className="aboutcard-content">
              <p>Contenido oculto que se mostrará cuando el botón sea clicado.</p>
              <p>Otro contenido oculto.</p>
            </div>
          </div>
        ) }


    </>
  )
};

export default AboutCard
