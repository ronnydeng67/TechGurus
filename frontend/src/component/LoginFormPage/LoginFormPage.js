import React, { useState, useRef } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './LoginForm.css';
// import webAuth from './icons8-fingerprint-50.png';
// import google from './icons8-google-48.png';
// import apple from './Apple_logo_black.svg';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

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
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();

    if (sessionUser) return <Redirect to="/" />;

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const isValidPassword = (password) => {
        return password.length > 5;
    }

    const handlePassword = (e) => {
        if (!isValidPassword(e.target.value)) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }

        setPassword(e.target.value)
    }

    
    const handleEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setEmailError(true)
        } else {
            setEmailError(false);
        }

        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        if (isValidEmail(email) && isValidPassword(password)) {
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
        } else {
            if ((!isValidPassword(password))) {
                setPasswordError(true)
                passwordRef.current.focus();
            }
            if (!isValidEmail(email)) {
                setEmailError(true)
                emailRef.current.focus();
            }
        }
    }

    const handleOnclick = e => {
        // e.preventDefault();
        setPasswordShown(!passwordShown);
    }

    const renderDemo = (e) => {
        e.preventDefault();
        const demos = [
            {email: "demo@user.com", password: "password"},
            {email: "milk@gmail.com", password: "password"},
            {email: "jason@gmail.com", password: "password"},
            {email: "garen@gmail.com", password: "password"},
            {email: "jenny@gmail.com", password: "password"},
            {email: "lynda@gmail.com", password: "password"},
            {email: "sharon@gmail.com", password: "password"},
            {email: "demo1@user.com", password: "password"},
            {email: "demo2@user.com", password: "password"},
            {email: "demo3@user.com", password: "password"}
        ]
        const ranIndex = Math.floor(Math.random() * demos.length);
        console.log(demos[ranIndex])
        dispatch(sessionActions.loginUser(demos[ranIndex])
            )
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
        history.goBack();

    }

    const errorIcon = <ReportGmailerrorredIcon fontSize='large'/>;

    return (
        <div className="loginMain">
            <div className="formBox">
                <div className="signInBoxContainer">
                    <div className="form">
                        <form  onSubmit={handleSubmit} className="form-self">
                            <div className='signInTitle'>
                                <h3>Sign In to TechGurus</h3>
                            </div>
                            {/* <ul>
                                {errors.map(error => <p>{error}</p>)}
                            </ul> */}
                            <div className={errors.length === 0 ? "" : "login-errors"}>
                                <div className={(errors.length > 0) ? ("login-error-icon") : ""}>
                                    {errors.length > 0 ? errorIcon : ""}
                                </div>
                                <div className={(errors.length > 0) ? "login-error" : ""}>
                                    {errors}
                                </div>
                            </div>
                            <div className="input-fields">
                                <div className="name">
                                    <EmailField
                                        inputRef={emailRef}
                                        id="email-box"
                                        label="Email Address"
                                        variant='outlined'
                                        size="medium"
                                        onChange={handleEmail}
                                        error={emailError}
                                        value={email}
                                        helperText={emailError ? "Please enter a valid email address." : ""}
                                        >
                                    </EmailField>
                                </div>
                                <div className="show-pass-container">
                                    <label className='show-password'>
                                            <input type="checkbox" onChange={handleOnclick}/>
                                            <span className='toggle'></span>
                                            &nbsp;&nbsp;Show Password
                                    </label>
                                </div>
                                <div className="password">
                                    <PasswordField
                                        inputRef={passwordRef}
                                        type={passwordShown ? "text" : "password"}
                                        id="password-box"
                                        label="Password"
                                        size='medium'
                                        value={password}
                                        variant='outlined'
                                        onChange={handlePassword}
                                        error={passwordError}
                                        helperText={passwordError ? "Please enter password with minimum 6 characters" : ""}
                                        >
                                    </PasswordField>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="foget-password">
                                <Link to="/" id="forget-text">Forget your password?</Link>
                            </div>
                            <div className="buttonContainer">
                                <button id="signInButton" type="submit">Sign In</button>
                            </div>
                        </form>
                    
                        <div className="buttonContainer">
                            <button id="signInButton" onClick={renderDemo}>Demo Sign In</button>
                        </div>
                        <br />
                        {/* <div className="afterOr"> */}
                        <div className="or">
                            <hr className='hr'/>
                        </div>
                        {/* </div> */}
                    <div className="agreement">
                        By continuing you agree to our <Link to="/">Terms and Conditions</Link>, our <Link to="/">Privacy Policy</Link>,
                        and the <Link to="/">My TechGurus Program Terms.</Link>
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