import React, { useState } from 'react';
import {  useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import logo from './logo1.png';
import './HomeHeader.css';

const style = {
    '& .MuiModal-root': {
        top: '100px'
    },
    position: 'absolute',
    top: '300px',
    left: '73.5%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const HomeHeader = ({ user }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showAccount, setShowAccount] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [recentOpen, setRecentOpen] = useState(false);
    const [search, setSearch] = useState("");

    const handleClick = () => {
        if(sessionUser) {
            dispatch(sessionActions.logoutUser());
        } else {
            history.push('/login');
        }
    }
    console.log("showAccount: ", showAccount)
    const handleAccOpen = () => {
        console.log('open run')
        setShowAccount(true)
    }

    const handleAccClose = () => {
        console.log('open close')

        setShowAccount(false)
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
                        <i className="fa-solid fa-bars"></i>
                        <p>&nbsp;Menu</p>
                    </div>
                    <div className="search-bar">
                        <input type="text"
                            placeholder='Search TechGurus'
                            id="search"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        <button id="magnify"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <div className="home-header-right">
                    <div className="store-finder">
                        <i className="fa-solid fa-shop"></i>
                        <p>&nbsp;Union Square</p>
                    </div>
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>&nbsp;Cart</p>
                    </div>
                </div>
            </div>
            <div className="lower-header">
                <div className="lower-left">
                    <ul className='left-list'>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.9rem'}}>Top Deal</Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.9rem'}}>Top Deal</Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.9rem'}}>Top Deal</Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.9rem'}}>Top Deal</Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.9rem'}}>Top Deal</Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.9rem'}}>Top Deal</Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.9rem'}}>Top Deal</Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.9rem'}}>Top Deal</Link></li>
                    </ul>
                </div>
                <div className="lower-right">
                    <div className="acc">
                        <button onClick={handleAccOpen} id="acc-button">
                          {(sessionUser) ? "Logout" : "Sign In"}
                        </button>
                        <Modal
                            open={showAccount}
                            onClose={handleAccClose}
                            aria-labelledby="acc-modal"
                        >
                            <Box sx={style}>
                                <Typography id="acc-modal" variant="h6" component="h2">
                                    <button>Sign In</button>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                    <div className="recent-view">
                        <button>Recently Views</button>
                    </div>
                    <div className="order-status">
                        <li><Link to='/' id='order-status' style={{ color: 'white', fontSize: '0.9rem'}}>Order Status</Link></li>
                    </div>
                    <div className="Saved-items">
                        <button>Saved Items</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeHeader;