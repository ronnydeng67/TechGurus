import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './SignUpFormPage.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

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



    // const handleNameError = () => {
    //     if (!name.length) {
    //         nameErrors.error = true;
    //         nameErrors.helperText = "sdasdasdasdas";
    //     }
    // }

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
                            <NameField
                                id="name1"
                                label="Full Name"
                                variant="outlined"
                                size="medium"
                                onChange={e => setName(e.target.value)}
                                >
                            </NameField>
                        </div>

                        <div className="email">
                            <EmailField
                                // error
                                // helperText="dasdasdsadas"
                                id="email1"
                                label="Email Address"
                                variant="outlined"
                                size="medium"
                                onChange={e => setEmail(e.target.value)}>
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
                                id="password1"
                                type={passwordShown ? "text" : "password"}
                                label="Password"
                                size="medium"
                                variant="outlined"
                                onChange={e => setPassword(e.target.value)}>
                            </PasswordField>
                        </div>

                        <div className="confirm-password">
                            <ConField
                                id="confirm-password1"
                                type={passwordShown ? "text" : "password"}
                                label="Confirm Password"
                                variant="outlined"
                                size="medium"
                                onChange={e => setConfirmPassword(e.target.value)}>
                            </ConField>
                        </div>
                        
                        <div className="create-button-container">
                            <button type="submit" id="create-button">Create an Account</button>
                        </div>
                    </form>
                </div>
                <div className="divide">
                    <div className='or-box'>or</div>
                    <hr className="signup-hr" />
                </div>
            
                <div className="signup-google">
                    <div className="google-button-container">
                        <button id="google-button">
                            <div className="inside-button">
                                <svg aria-hidden="true" role="img" viewBox="0 0 100 100" height="22" width="22"><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd"><path d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z" fill="#4285F4"></path><path d="M9 18a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 9 18z" fill="#34A853"></path><path d="M3.96 10.71a5.41 5.41 0 0 1 0-3.42V4.96h-3a9 9 0 0 0 0 8.08l3-2.33z" fill="#FBBC05"></path><path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 .96 4.95l3 2.34A5.36 5.36 0 0 1 9 3.58z" fill="#EA4335"></path></svg></svg>
                                Sign Up with Google
                            </div>
                        </button>
                    </div>

                    <div className="terms">
                        By continuing you agree to our <Link to="/">Terms and Conditions</Link>, our <Link to="/">Privacy Policy</Link>,
                        and the <Link>My TechGurus Program Terms.</Link>
                    </div>

                    <hr className='hr'/>
                </div>
                <div className="bottom-text">
                    <span>
                        Already have an account? 
                        <Link to='login'>Sign In</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default SignUpFormPage;

