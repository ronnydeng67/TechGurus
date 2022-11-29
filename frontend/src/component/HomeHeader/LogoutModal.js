import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

const LogoutModal = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(sessionActions.logoutUser());
        document.body.style.position = 'static';
        document.body.style.overflowY = 'auto';
        history.push('/');
    }

    return (
        <div className="logout-modal-container">
            <div className="modal-top">
                <div className="modal-signin">
                    <button id="modal-signin" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}
 
export default LogoutModal;