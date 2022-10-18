import React, { useState } from 'react';
import { Modal } from '../AccModal/AccModal';
import './HomeHeader.css';
import LoginForm from './TheModal';


const ShowAccForm = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="acc">Account</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default ShowAccForm;

