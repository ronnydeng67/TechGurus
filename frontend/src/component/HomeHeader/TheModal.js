import { useHistory } from "react-router-dom";
import "./TheModal.css";

function LoginForm() {
    const history = useHistory()

    const handleSignIn = () => {
        document.body.style.position = 'static';
        document.body.style.overflowY = 'auto';
        history.push('/login');
    }

    const handleCreate = () => {
        document.body.style.position = 'static';
        document.body.style.overflowY = 'auto';
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