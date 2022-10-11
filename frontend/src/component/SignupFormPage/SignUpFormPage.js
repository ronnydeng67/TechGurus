import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './SignUpFormPage.css';

const SignUpFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);
    if (sessionUser) return <Redirect to="/"/>

    const handleOnclick = e => {
        setPasswordShown(!passwordShown);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({name, email, password}))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }

                if (data?.errors) setErrors(data.erros);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            })
        }
        return setErrors(['Please confirm you typed in the correct password!'])
    }

    return (
        <div className="signup-page">
            <div className="signup-box">
                <h3 className='title'>Create an Account</h3>
                <span className="business-acc">Shopping for your business? <Link to="/">Create a business account.</Link></span>
                <ul className="errors">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" required 
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label>Full Name</label>
                    </div>
                    <div className="email">
                        <input type="text" required 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Email Address</label>
                    </div>
                    <label className='show-password'>
                            <input type="checkbox" onChange={handleOnclick}/>
                            <span className='toggle'></span>
                            Show Password
                    </label>
                    <div className="password">
                        <input type={passwordShown ? "text" : "password"} required 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>
                    <div className="confirm-password">
                        <input type={passwordShown ? "text" : "password"} required 
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <label>Confirm Password</label>
                    </div>
                    <div className="create-button">
                        <button type="submit">Create an Account</button>
                    </div>
                </form>
            </div>
            <div className="or">

            </div>
            <div className="signup-google">

            </div>
        </div>
    );
}
 
export default SignUpFormPage;