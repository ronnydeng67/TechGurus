import React, { useEffect, useState } from 'react';
import {  useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import logo from './logo1.png';
import { HiMagnifyingGlass } from "react-icons/hi2";
import './HomeHeader.css';
import ShowAccForm from './ShowAccModal';
import { getCarts } from '../../store/carts';

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

const HomeHeader = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showAccount, setShowAccount] = useState(false);
    const [search, setSearch] = useState("");
    const carts = useSelector(getCarts);
    // const[itemCount, setItemCount] = useState(Object.values(carts).length);
    // console.log(itemCount);
    const handleClick = () => {
            dispatch(sessionActions.logoutUser());
    }
    const handleAccOpen = () => {
        console.log('open run')
        setShowAccount(true)
    }

    // let itemCount = 0;
    // Object.values(carts).map(cart => {
    //     itemCount += cart.quantity
    //     return itemCount
    // })

        
    useEffect(()=>{
    }, [carts])

    let userId = null;
    let sessionLinks;
    if (sessionUser) {
        userId = sessionUser.id;
        sessionLinks = (
        <button onClick={handleClick} id="acc">Logout</button>
        );
    } else {
        sessionLinks = (
            <ShowAccForm />
        );
    }

    let cartQuan = 0
    if (carts.length > 0) {
        carts.forEach(cart => {
            cartQuan += cart.quantity
        })
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
                        {/* <i className="fa-solid fa-bars"></i> */}
                        {/* <p>&nbsp;Menu</p> */}
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="search-bar">
                        <input type="text"
                            placeholder='Search TechGurus'
                            id="search"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        <button id="magnify"><HiMagnifyingGlass style={{color: "black", fontSize: "x-large"}}/></button>
                    </div>
                </div>
                <div className="home-header-right">
                    <div className="store-finder">
                        <i className="fa-solid fa-shop"></i>
                        <p style={{fontFamily: "bestbuy-medium", fontSize: "1.3rem"}}>&nbsp;Union Square</p>
                    </div>
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        {carts && <span id='cart-num'>&nbsp;{cartQuan}</span>}
                        {/* <AiOutlineShoppingCart style={{fontSize: "2rem"}}/> */}
                        <p style={{fontFamily: "bestbuy-medium", fontSize: "1.3rem"}}>&nbsp;<Link to={`/carts`} id="cart-link">Cart</Link></p>
                    </div>
                </div>
            </div>
            <div className="lower-header">
                <div className="lower-left">
                    <ul className='left-list'>
                        <li><Link to='/computer' className='deal' style={{ color: 'white', fontSize: '0.8rem'}}>Computers</Link></li>
                        <li><Link to='/camera' className='deal' style={{ color: 'white', fontSize: '0.8rem'}}>Cameras</Link></li>
                        <li><Link to='/phone' className='deal' style={{ color: 'white', fontSize: '0.8rem'}}>Cell Phones</Link></li>
                        <li><Link to='/audio' className='deal' style={{ color: 'white', fontSize: '0.8rem'}}>Audio</Link></li>
                        <li><Link to='/game' className='deal' style={{ color: 'white', fontSize: '0.8rem'}}>Video Games</Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.8rem'}}></Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.8rem'}}></Link></li>
                        <li><Link to='/' className='deal' style={{ color: 'white', fontSize: '0.8rem'}}></Link></li>
                    </ul>
                </div>
                <div className="lower-right">
                    <div className="acc">
                        {sessionLinks}
                    </div>
                    <div className="recent-view">
                        {/* <button id="recently-button">Recently Views</button> */}
                        <button id="recently-button">Linkedin</button>
                    </div>
                    <div className="order-status">
                        {/* <Link to='/' id='order-status' style={{ color: 'white', fontSize: '0.9rem'}}>Order Status</Link> */}
                        <Link to='/' id='order-status' style={{ color: 'white', fontSize: '0.9rem'}}>Contact Info</Link>
                    </div>
                    <div className="Saved-items">
                        {/* <button id="save-button">Saved Items</button> */}
                        <button id="save-button">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeHeader;