import './ContactCard.css'
import phone from '../assets/images/phone.png'
import pdf from '../assets/images/pdf.png'

import  linkedin from '../assets/icons/linkedin.svg'
import  github from '../assets/icons/github.svg'
import  instagram from '../assets/icons/instagram.svg'

const Contact = () => {
  return (
    <div className="contact-container">
      <h3 className="contact-title">Have me make stuff for you.</h3>
      <img src={phone} alt="phone" className="contact-image"/>
      <h3 className="contact-number">+54 351 541 7574 (AR)</h3>
      <p className="contact-email">carlosalaingamarra@gmail.com</p>
      <h3 className="contact-title">Check my Resume:</h3>
      <img src={pdf} alt="cv" className="contact-image"/>

      <p className="contact-social">Find me on</p>
      <div className="contact-social-links">

        <a href="https://www.linkedin.com/in/carlos-alain-gamarra-164529207" target="_blank" rel="noopener noreferrer" className='c-s-link'>
            <img src={linkedin} alt="linkedin" width={30}/>
          </a>
          <a href="https://github.com/CarlosAlainGamarra" target="_blank" rel="noopener noreferrer" className='c-s-link'>
            <img src={github} alt="github" width={25}/>
          </a>
          <a href="https://www.instagram.com/alaingamarov/" target="_blank" rel="noopener noreferrer" className='c-s-link'>
            <img src={instagram} alt="instagram" width={30}/>
          </a>

      </div>
    </div>
  )
}

export default Contact