//Style & data
import './Skills.css'
import iconsData from '../assets/data.js'

export const Skills = () => {
    return (  
    <div id="skills">
      <h2>Skills</h2>
      <div className='skills-container'>
        {iconsData.map((item) => (
          <div className="skillcard" key={item.title}> 
            <div className="skillcard-content">
              <div className="cskillcard-image-container">
                <img src={item.icon} alt="react" className="skillcard-image" style={{width: item.with}}/>
              </div>        
              <h3 className="skillcard-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default Skills