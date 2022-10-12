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
                <div className="title-box">
                    <h3 className='title'>Create an Account</h3>
                </div>
                <div className="bus-acc-container">
                    <div className="business-acc">Shopping for your business? 
                        <Link to="/">&nbsp;Create a business account.</Link>
                    </div>
                </div>
                <ul className="errors">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <input type="text" required 
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <label id="name-holder">Full Name</label>
                        </div>
                        <div className="email">
                            <input type="text" required
                                id="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label id="email-holder">Email Address</label>
                        </div>
                        <label className='show-password'>
                                <input type="checkbox" onChange={handleOnclick}/>
                                <span className='toggle'></span>
                                Show Password
                        </label>
                        <div className="password">
                            <input type={passwordShown ? "text" : "password"} required
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <label id="password-holder">Password</label>
                        </div>
                        <div className="confirm-password">
                            <input type={passwordShown ? "text" : "password"} required
                                id="confirm-password" 
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                            <label id="con-pass-holder">Confirm Password</label>
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
        </div>
    );
}
 
export default SignUpFormPage;