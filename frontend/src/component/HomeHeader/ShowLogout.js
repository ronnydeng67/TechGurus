import { useState } from "react";
import { Modal } from "../AccModal/AccModal";
import LogoutModal from "./LogoutModal";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ShowLogout = ({ sessionUser }) => {
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
            <button onClick={handleModal} id="acc">
                <AccountCircleIcon style={{fontSize: "1rem"}}/> Hi,&nbsp;
                {sessionUser.name.split(" ")[0]}
            </button>
            {showModal && (
                <Modal onClose={handleModalClose}>
                    <LogoutModal />
                </Modal>
            )}
        </>
    );
}
 
export default ShowLogout;