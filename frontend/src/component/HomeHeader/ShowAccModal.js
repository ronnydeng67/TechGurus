import React, { useEffect, useState } from 'react';
import { Modal } from '../AccModal/AccModal';
import './HomeHeader.css';
import LoginForm from './TheModal';


const ShowAccForm = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = e => {
    e.preventDefault();
    setShowModal(true)
    document.body.style.overflow = 'hidden';
  }

  const handleModalClose = e => {
    e.preventDefault();
    setShowModal(false)
    document.body.style.overflow = 'visible'
  }


  return (
    <>
      <button onClick={handleModal} id="acc">Account</button>
      {showModal && (
        <Modal onClose={handleModalClose}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default ShowAccForm;

