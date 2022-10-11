import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import logo from './logo1.png';
import './HomeHeader.css';

const HomeHeader = ({ user }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [showAccount, setShowAccount] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState("");

    const handleClick = () => {
        if(sessionUser) {
            logout();
        } else {
            history.push('/login');
        }
    }

    useEffect(() => {
        if (!showAccount) return;
        const closeAcc = () => {
            setShowAccount(false);
        }

        document.addEventListener('click', closeAcc);
        return () => document.removeEventListener('click', closeAcc)
    }, [showAccount])


    const logout = (e) => {
        // e.preventDefault();
        dispatch(sessionActions.logoutUser())
    }


    return (
        <div className="home-header">
            <div className="upper-header">
                <div className="home-header-left">
                    <div className="icon">
                        <Link to="/">
                            <img src={logo} id="logo"></img>
                        </Link>
                    </div>
                    <div className="dropdown-menu">
                        <i class="fa-solid fa-bars"></i>
                        Menu
                    </div>
                    <div className="search-bar">
                        <input type="text"
                            placeholder='Search TechGurus'
                            id="search"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        <span id="magnify"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div className="home-header-right">
                    <div className="store-finder">
                        Store
                    </div>
                    <div className="cart">
                        Cart
                    </div>
                </div>
            </div>
            <div className="lower-header">
                <div className="acc">
                    <button onClick={handleClick} id="acc-button">
                        {(sessionUser) ? "Logout" : "Sign In"}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default HomeHeader;