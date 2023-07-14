
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

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


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
        <h3 className="card-title">titulo</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan turpis nec varius lobortis.</p>
      </div>

      <div className={`card-buttons ${isHovered ? 'visible' : ''}`}>
        <a href="#" className="card-button" onClick={openModal}>Moore</a>
        <a href="#" className="card-button">Visit</a>
      </div>
      
      <img src={barca} alt="Card" className="card-image" />

      <Modal
        id='box'
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <img src={barca} alt="barca" className='modal-image'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan turpis nec varius lobortis.</p>
        
        <img src={close} alt="close" onClick={closeModal} className="modal-close-button"/>
        <div className='card-footer'>
          <a  href="https://www.google.com" className="card-button" target="_blank" rel='noreferrer'>Visit</a>
          
          <div className='modal-icons-container'>
            <img src={github2} alt="github" className='modal-git-link'/>
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
