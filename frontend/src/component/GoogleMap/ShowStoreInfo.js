import { useState } from 'react';
import { Modal } from '../AccModal/AccModal';
import './GoogleMap.css';

const ShowStoreInfo = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = e => {
        e.preventDefault();
        setShowModal(true)
    }

    const handleModalClose = e => {
        e.preventDefault();
        setShowModal(false)

    }
    return (
        <>
            <div className="store-finder" onClick={handleModal}>
                <i className="fa-solid fa-shop"></i>
                <p style={{fontFamily: "bestbuy-medium", fontSize: "1.3rem"}}>&nbsp;Union Square</p>
            </div>
            {showModal && (
                <Modal onClose={handleModalClose}>

                </Modal>
            )}
        </>
    );
}
 
export default ShowStoreInfo