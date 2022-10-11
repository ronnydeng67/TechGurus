import Reach, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import logo from '../HomeHeader/logo1.png';
import './Header.css';

const Header = () => {


    return (
        <div className="loginHeader">
                {/* <h1 className='headerTitle'>TechGurus</h1> */}
                <div className="login-icon">
                    <Link to="/">
                        <img src={logo} id="login-logo"></img>
                    </Link>
                </div>
                <a id="headerReturn" href=""><h4>Return to previous page</h4></a>
            </div>
    );
}
 
export default Header;