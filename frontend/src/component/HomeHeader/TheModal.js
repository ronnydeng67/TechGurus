import { useHistory } from "react-router-dom";
import "./TheModal.css";

function LoginForm() {
    const history = useHistory()

    const handleSignIn = () => {
        history.push('/login');
    }

    const handleCreate = () => {
        history.push('/signup')
    }

    return (
        <div className="modal-container">
            <div className="modal-top">
                <div className="modal-title">
                    Becoming a My TechGurus member comes with
                    easy order tracking, rewards, offers and more.
                </div>
                <div className="modal-signin">
                    <button id="modal-signin" onClick={handleSignIn}>Sign In</button>
                </div>
                <div className="modal-create">
                    <button id="modal-create" onClick={handleCreate}>Create Account</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;