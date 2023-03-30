import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link, useHistory } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './SignUpFormPage.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const NameField = styled(TextField)({
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

const ConField = styled(TextField)({
    '& .MuiFormHelperText-root': {
        color: 'green',
    },
    '&.Mui-error': {
        color:'red',
    },
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

const SignUpFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [conPassError, setConPassError] = useState(false);
    const [matchMsg, setMatchMsg] = useState("");
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmRef = useRef(null);
    const history = useHistory();

    if (sessionUser) return <Redirect to="/" />


    const handleOnclick = e => {
        setPasswordShown(!passwordShown);
    }

    const handleGoogle = e => {
        alert("Stay tuned for this feature!")
    }


    const handleSubmit = e => {
        e.preventDefault();
        if ((password === confirmPassword) && (isValidName(name)) && (isValidEmail(email)) && (password.length > 5)) {
            setErrors([]);
            dispatch(sessionActions.signup({name, email, password}))
                .catch(async (res) => {
                    debugger
                    let data;
                    try {
                        data = await res.clone().json();
                    } catch {
                        data = await res.text();
                    }

                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else return setErrors([res.statusText]);
                })
        } else {
            if ((password !== confirmPassword) || (confirmPassword.length === 0)) {
                setConPassError(true);
                confirmRef.current.focus();
                setMatchMsg("Passwords do not match.")
            }
            if (!isValidPassword(password)) {
                setPasswordError(true);
                passwordRef.current.focus();
            }
            if (!isValidEmail(email)) {
                setEmailError(true);
                emailRef.current.focus();
            }
            if (!isValidName(name)){
                setNameError(true)
                nameRef.current.focus();
            } 
        }
    }

    const isValidName = (name) => {
        return name.length > 0;
    }

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const isValidPassword = (password) => {
        return password.length > 5;
    }

    const handleName = (e) => {
        if(!isValidName(e.target.value)) {
            setNameError(true)
        } else {
            setNameError(false)
        }

        setName(e.target.value)
    }

    const handleEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setEmailError(true)
        } else {
            setEmailError(false);
        }

        setEmail(e.target.value);
    }

    const handleConPass = (e) => {
        if (((e.target.value) === password) && (password.length !== 0)) {
            setConPassError(false)
            setMatchMsg("Your passwords match!")
        } else {
            setConPassError(true)
            setMatchMsg("Passwords do not match.")
        }

        setConfirmPassword(e.target.value)
    }

    const handlePassword = (e) => {
        if (!isValidPassword(e.target.value)) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }

        setPassword(e.target.value);
    }

    const errorIcon = <ReportGmailerrorredIcon fontSize='large'/>;


    return (
        <div className="signup-page">
            <div className="signup-box">
                <div className="title-box">
                    <h3 className='title'>Create an Account</h3>
                </div>
                    <div className={errors.length === 0 ? "" : "errors"}>
                        <div className={(errors.length > 0) ? ("error-icon") : ""}>
                            {errors.length > 0 ? errorIcon : ""}
                        </div>
                        <div className={(errors.length > 0) ? "error" : ""}>
                            {errors}
                        </div>
                    </div>
                <div className="bus-acc-container">
                    <div className="business-acc">Shopping for your business?&nbsp;
                        <Link to="/" id="business-acc" >Create a business account.</Link>
                    </div>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <NameField
                                inputRef={nameRef}
                                id="name1"
                                label="Full Name"
                                variant="outlined"
                                size="medium"
                                value={name}
                                onChange={handleName}
                                error={nameError}
                                helperText={nameError ? "Please enter your full name." : ""}
                                >
                            </NameField>
                        </div>

                        <div className="email">
                            <EmailField
                                inputRef={emailRef}
                                id="email1"
                                label="Email Address"
                                variant="outlined"
                                size="medium"
                                onChange={handleEmail}
                                error={emailError}
                                helperText={emailError ? "Please enter a valid email address." : ""}
                                >
                            </EmailField>
                        </div>
                        <div className="show-pass-container">
                            <label className='show-password'>
                                    <input type="checkbox" onChange={handleOnclick}/>
                                    <span className='toggle'></span>
                                    Show Password
                            </label>
                        </div>

                        <div className="password">
                            <PasswordField
                                inputRef={passwordRef}
                                id="password1"
                                type={passwordShown ? "text" : "password"}
                                label="Password"
                                size="medium"
                                variant="outlined"
                                onChange={handlePassword}
                                error={passwordError}
                                helperText={passwordError ? "Please enter password with minimum 6 characters" : ""}
                                >
                            </PasswordField>
                        </div>

                        <div className="confirm-password">
                            <ConField
                                inputRef={confirmRef}
                                id="confirm-password1"
                                type={passwordShown ? "text" : "password"}
                                label="Confirm Password"
                                variant="outlined"
                                size="medium"
                                onChange={handleConPass}
                                error={conPassError}
                                helperText={matchMsg}
                                >
                            </ConField>
                        </div>
                        
                        <div className="create-button-container">
                            <button type="submit" id="create-button">Create an Account</button>
                        </div>
                    </form>
                </div>
                <div className="divide">
                    {/* <div className='or-box'>or</div> */}
                    <hr className="signup-hr" />
                </div>
            
                <div className="signup-google">
                    {/* <div className="google-button-container">
                        <button id="google-button" onClick={handleGoogle}>
                            <div className="inside-button">
                                <svg aria-hidden="true" role="img" viewBox="0 0 100 100" height="22" width="22"><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd"><path d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z" fill="#4285F4"></path><path d="M9 18a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 9 18z" fill="#34A853"></path><path d="M3.96 10.71a5.41 5.41 0 0 1 0-3.42V4.96h-3a9 9 0 0 0 0 8.08l3-2.33z" fill="#FBBC05"></path><path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 .96 4.95l3 2.34A5.36 5.36 0 0 1 9 3.58z" fill="#EA4335"></path></svg></svg>
                                Sign Up with Google
                            </div>
                        </button>
                    </div> */}

                    <div className="terms">
                        By continuing you agree to our <Link to="/">Terms and Conditions</Link>, our <Link to="/">Privacy Policy</Link>,
                        and the <Link to="/">My TechGurus Program Terms.</Link>
                    </div>

                    <hr className='hr'/>
                </div>
                <div className="bottom-text">
                    <span>
                        Already have an account? 
                        <Link to='login'>&nbsp;Sign In</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default SignUpFormPage;

