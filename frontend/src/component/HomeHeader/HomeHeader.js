import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './HomeHeader.css';

const HomeHeader = ({ user }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [showAccount, setShowAccount] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
            logout();
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

    if (!sessionUser) return <Redirect to="/login" />

    return (
        <div className="home-header">
            <div className="upper-header">
                <div className="icon">
                    <img src="./icon.png"/>
                </div>
                <div className="dropdown-menu">
                    Menu
                </div>
                <div className="search-bar">
                    Search
                </div>
                <div className="store-finder">
                    Store
                </div>
                <div className="cart">
                    Cart
                </div>
            </div>
            <div className="lower-header">
                <div className="acc">
                    <button onClick={handleClick}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default HomeHeader;