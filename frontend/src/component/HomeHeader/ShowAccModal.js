import React, { useState } from 'react';
import { Modal } from '../AccModal/AccModal';
import './HomeHeader.css';
import LoginForm from './TheModal';


const ShowAccForm = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = e => {
    e.preventDefault();
    setShowModal(true)
    // document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'scroll';
  }

  const handleModalClose = e => {
    e.preventDefault();
    setShowModal(false)
    // document.body.style.overflow = 'visible'
    document.body.style.position = 'static';
    document.body.style.overflowY = 'auto';
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

