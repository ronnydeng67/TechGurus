import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './LoginForm.css';
import webAuth from './icons8-fingerprint-50.png';
import google from './icons8-google-48.png';
import apple from './Apple_logo_black.svg';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const EmailField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'black',
    },
    '& label': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
        borderColor: 'light-gray',
        },
        '&:hover fieldset': {
        borderColor: 'blue',
        },
        '&.Mui-focused fieldset': {
        borderColor: 'blue',
        },
    },
});

const PasswordField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'black',
    },
    '& label': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
        borderColor: 'light-gray',
        },
        '&:hover fieldset': {
        borderColor: 'blue',
        },
        '&.Mui-focused fieldset': {
        borderColor: 'blue',
        },
    },
});


const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPassowrdError] = useState("");
    // console.log(sessionUser);

    if (sessionUser) return <Redirect to="/" />;

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const isValidPassword = (password) => {
        return password.length > 1;
    }

    const handlePassword = (e) => {
        if (!isValidPassword(e.target.value)) {
            setPassowrdError("Please enter your password.")
        } else {
            setPassowrdError("")
        }

        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setEmailError("Please enter a valid email address.")
        } else {
            setEmailError("");
        }

        setEmail(e.target.value);
    }

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

    const renderDemo = (e) => {
        e.preventDefault();
        setEmail("demo@user.com")
        setPassword("password")
    }

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
                        <div className="name">
                            <EmailField
                                id="email-box"
                                label="Email Address"
                                variant='outlined'
                                size="medium"
                                onChange={handleEmail}
                                error={emailError}
                                >
                            </EmailField>
                        </div>
                        <br />
                        <div className="password">
                            <PasswordField
                                id="password-box"
                                label="Password"
                                size='medium'
                                variant='outlined'
                                onChange={handlePassword}
                                error={passwordError}
                                >
                            </PasswordField>
                        </div>
                        <br />
                        <div className="fogetPassword">
                            <Link to="/">Forget your password?</Link>
                        </div>
                        <div className="buttonContainer">
                            <button id="signInButton" type="submit">Sign In</button>
                        </div>
                    </form>
                        <div className="demo">
                            <button className='demo-user' onClick={renderDemo}>Demo User</button>
                        </div>
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