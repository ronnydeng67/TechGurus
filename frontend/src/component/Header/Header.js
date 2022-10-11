import Reach, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Header.css';

const Header = () => {


    return (
        <div className="loginHeader">
                <h1 className='headerTitle'>TechGurus</h1>
                <a id="headerReturn" href=""><h4>Return to previous page</h4></a>
            </div>
    );
}
 
export default Header;