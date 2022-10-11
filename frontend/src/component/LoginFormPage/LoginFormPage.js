import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './LoginForm.css';
import webAuth from './icons8-fingerprint-50.png';
import google from './icons8-google-48.png';
import apple from './Apple_logo_black.svg';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);

    if (sessionUser) return <Redirect to="/" />

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.loginUser({email, password}))
            .catch(async(res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            })
    }

    const handleOnclick = e => {
        // e.preventDefault();
        setPasswordShown(!passwordShown);
    }

    // const webAuthn = <img src="/icons8-fingerprint-50.png"/>

    return (
        <div className="loginMain">
            {/* <div className="loginHeader">
                <h1 className='headerTitle'>TechGurus</h1>
                <a id="headerReturn" href=""><h4>Return to previous page</h4></a>
            </div> */}
            <div className="formBox">
                <div className="signInBoxContainer">
                    <div className="form">

                    <form  onSubmit={handleSubmit}>
                        <div className='signInTitle'>
                            <h3>Sign In to TechGurus</h3>
                        </div>
                        <ul>
                            {errors.map(error => <p>{error}</p>)}
                        </ul>
                        <label>
                            Email Address
                            <br />
                            <input id="emailBox" type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label className='showPassword'>
                            <input type="checkbox" onChange={handleOnclick}/>
                            <span className='toggle'></span>
                            Show Password
                        </label>
                        <br />
                        <label>
                            Password
                            <br />
                            <input id="passwordBox" type={passwordShown ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <div className="fogetPassword">
                            <Link to="/">Forget your password?</Link>
                        </div>
                        <div className="buttonContainer">
                            <button id="signInButton" type="submit">Sign In</button>
                        </div>
                    </form>
                    <br />
                    {/* <div className="afterOr"> */}
                        <div className="or">
                            <div className="text">or</div>
                            <hr className='hr'/>
                        </div>
                        <div className="webAuthnContainer">
                            <button id="webAuthnButton" type="submit"><img src={webAuth} id="figurePrint" /> Sign In with WebAuthn</button>
                        </div>
                        <div className="appleContainer">
                            <button id="appleButton" type="submit"><img src={apple} id="apple" /> Sign In with Apple</button>
                        </div>
                        <div className="googleContainer">
                            <button id="googleButton" type="submit"><img src={google} id="google" /> Sign In with Google</button>
                        </div>
                    {/* </div> */}
                    <div className="agreement">
                        By continuing you agree to our <Link to="/">Terms and Conditions</Link>, our <Link to="/">Privacy Policy</Link>,
                        and the <Link>My TechGurus Program Terms.</Link>
                    </div>

                    <div className="buttomBreak">
                        <hr className='hr'/>
                    </div>
                    <div className="noAcc">
                        Don't have an account? <Link to="/signup">Create an account</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LoginFormPage;