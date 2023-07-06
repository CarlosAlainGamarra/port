
//Assets
import barca from '../assets/images/barca.jpg'
import close from '../assets/icons/close.png'


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

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
      
      
      <h3 className="card-title">titulo</h3>

      <div className={`card-buttons ${isHovered ? 'visible' : ''}`}>
        <a href="#" className="card-button" onClick={openModal}>Moore</a>
        <a href="#" className="card-button">Visit</a>
      </div>
      
      <img src={barca} alt="Card" className="card-image" />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan turpis nec varius lobortis.</p>
        <img src={close} alt="close" onClick={closeModal} className="modal-close-button"/>
      </Modal>
    </div>
  );
};

export default Card;
