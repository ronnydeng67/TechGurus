import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

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

    return (
        <div className="loginMain">
            <div className="loginHeader">
                <h1 className='headerTitle'>TechGurus</h1>
                <a id="headerReturn" href=""><h4>Return to previous page</h4></a>
            </div>
            <div className="formBox">
                <div className="signInBoxContainer">
                    <form  onSubmit={handleSubmit}>
                        <h3 className='signInTitle'>Sign In to TechGurus</h3>
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
                        <label>
                            Password
                            <br />
                            <input id="passwordBox" type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <button id="signInButton" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default LoginFormPage;