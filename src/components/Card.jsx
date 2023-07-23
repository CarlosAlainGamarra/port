
//Assets
import barca from '../assets/images/barca.jpg'
import close from '../assets/icons/close.png'

import react from "../assets/images/react.svg"
import css from "../assets/images/css.svg"
import html from "../assets/images/html.svg"
import js from "../assets/images/js.svg"
import github2 from "../assets/images/github2.svg"



import { useState } from 'react';
import Modal from 'react-modal';
import './Card.css';

const Card = ({project}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techs = project.techs

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  //Close Modal
  window.addEventListener('mouseup', (e) => {
    const box = document.getElementById('box')
    if(e.target != box && e.target.parentNode != box){    
      box.style.display = 'none'
      setTimeout(() => {
        setIsModalOpen(false)
      }, 0.000001);    
    }
  })


  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
      
      <div className='card-content'>
        <h3 className="card-title">{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className={`card-buttons ${isHovered ? 'visible' : ''}`}>
        <a href="#" className="card-button" onClick={openModal}>Moore</a>
        <a href={project.url} target="_blank" rel='noreferrer' className="card-button">Visit</a>
      </div>
      
      <img src={project.image} alt="Card" className="card-image" />

      <Modal
        id='box'
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <img src={project.image} alt="barca" className='modal-image'/>
        <p>
        <ul className='tech-list'>{techs.map (tech => (
          <li key={project.title} className='tech-item'>
            {tech}
          </li>
        ))}
       </ul>
        </p>
        
        <img src={close} alt="close" onClick={closeModal} className="modal-close-button"/>
        <div className='card-footer'>
          <a  href={project.url} className="card-button" target="_blank" rel='noreferrer'>Visit</a>
          
          <div className='modal-icons-container'>
            <a href={project.git} rel='noreferrer' target='_blank'><img src={github2} alt="github" className='modal-git-link'/></a>
            <img src={react} alt="react" className='modal-icon'/>
            <img src={js} alt="js" className='modal-icon'/>
            <img src={html} alt="html" className='modal-icon'/>
            <img src={css} alt="css" className='modal-icon'/>
          </div>
        </div>  
      </Modal>
    </div>
  );
};

export default Card;
