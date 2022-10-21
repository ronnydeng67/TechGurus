import Reach, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import logo from '../HomeHeader/logo1.png';
import './Header.css';

const Header = () => {
    const history = useHistory();

    const handleBack = e => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <div className="loginHeader">
                {/* <h1 className='headerTitle'>TechGurus</h1> */}
                <div className="login-icon">
                    <Link to="/">
                        <img src={logo} id="login-logo"></img>
                    </Link>
                </div>
                {/* <a id="headerReturn" onClick={handleBack}><h4>Return to previous page</h4></a> */}
                <button onClick={handleBack} style={{fontSize: "small"}}>Return to previous page</button>
            </div>
    );
}
 
export default Header;