import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import { fetchItem, getItem } from '../../store/items';
import { FaExchangeAlt } from 'react-icons/fa';
import { FiHeadphones, FiShield } from 'react-icons/fi';
import { MdHandyman, MdOutlineStore, MdLocalShipping, MdShoppingCart } from 'react-icons/md';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import './ItemShowPage.css';
import { addToCart, editCart } from '../../store/carts';
import { useHistory } from 'react-router-dom';


const ItemShowPage = () => {
    const history = useHistory();
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const sessionUser = useSelector(state => state.session.user);
    const state = useSelector(state => state);

    const lol = useSelector(getItem(itemId))

    useEffect(() => {
        dispatch(fetchItem(itemId)).then((res) => {
            setItem(res)
        }).then(() => {
            setIsLoading(false)
        })
    },[itemId, dispatch])


    const addItem = e => {
        // e.preventDefault();
        if (state.session.user) {
            dispatch(addToCart({itemId: itemId, userId: sessionUser.id, quantity: 1}))
        } else {
            history.push('/login')
        }
    }

    let month
    if(lol) {
        if((lol.price > 200 && lol.price < 500)) {
            month = 12;
        } else if (lol.price > 500 && lol.price < 800) {
            month = 24;
        } else if (lol.price < 200){
            month = 4;
        } else {
            month = 36;
        }
    }

    const returnDate = moment().add(15, 'days').format('MMM Do')
    const pickup = moment().add(2, 'days').format('dddd, MMM Do')
    const ship = moment().add(3, 'days').format('dddd, MMM Do')

    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="page-container">
                <div className="item-container">
                    <div className="item-left">
                        <div className="item-name">{lol.name}</div>
                        <div className="item-pic" style={{textAlign: 'center'}}>
                            <img width='auto' height='350' style={{margin: '150px'}} src={lol.photoUrl} alt="" />
                        </div>
                    </div>
                    <div className="item-right">
                        <div className="item-price">
                            <div className="price-text">
                                <div className="price">
                                    ${lol.price}
                                </div>
                                <div className='price-divider'>
                                    <div style={{flex: '1 0 40%', borderLeft: '1px', border: '1px solid black', height: '8px'}}></div>
                                    <div className='item-or'>or</div>
                                    <div style={{flex: '1 0 40%', borderLeft: '1px', border: '1px solid black', height: '8px'}}></div>
                                </div>
                                <div className="payment">
                                    <div className="monthly">
                                        ${((lol.price) / month).toFixed(2)}/mo.*
                                    </div>
                                    <div className="four-payment">
                                        suggested payments with
                                    </div>
                                    <div className="payment-terms">
                                        {month}-Month financing
                                    </div>
                                    <div className="show-more">
                                        <Link to="/">Show me how </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="return-box-container">
                                <div className="return-box">
                                    <div className="return-icon">
                                        <FaExchangeAlt style={{paddingTop: '20px'}}/>
                                    </div>

                                    <div className="days-text">
                                        15-DAY FREE & EASY RETURNS
                                        <div className="return-details">
                                            If received today, the last day to return this item would {returnDate}.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="total-tech-container">
                            <div className="total-tech-box">
                                <div className="tech-1">
                                    TechGurus
                                    TotalTech
                                    <div className="inside-tech-1">
                                        The membership you and your tech deserve.
                                    </div>
                                </div>
                                <div className="tech-2">
                                    <FiHeadphones style={{color: "green", marginRight: "10px"}}/>
                                    Free TechSquad tech supoort available 24/7/365
                                </div>
                                <div className="tech-3">
                                    <FiShield style={{color: "green", marginRight: "10px"}}/>
                                    Up to 24 months of product protection on most 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TechGurus purchases, with active membership
                                </div>
                                <div className="tech-4">
                                    <MdHandyman style={{color: "green", marginRight: "10px"}}/>
                                    Free delivery and standard installation
                                </div>
                                <div className="tech-price">
                                    $199.99 per year
                                </div>
                                <div className="learn-about">
                                    <button id='total-tech'>Purchase Totaltech</button>
                                </div>
                            </div>
                        </div>
                        <div className="get-it-container">
                            <div className="get-it-title" style={{color: "green", fontFamily: "bestbuy-medium", fontSize: ""}}>
                                Get it in 3 days
                            </div>
                            <div className="pick-up" style={{fontSize: "0.8rem"}}>
                                <MdOutlineStore style={{fontSize: "large"}}/>
                                <p>Pickup:</p>&nbsp;Order now for pickup on {pickup} at Union Square
                            </div>
                            <div className="free-shipping" style={{fontSize: "0.8rem"}}>
                                <MdLocalShipping style={{fontSize: "large"}} />
                                <p>Free Shipping:</p>&nbsp;Get it by {ship}.
                            </div>
                        </div>
                        <div className="add-cart-container">
                            <div className="add-cart-button">
                                <button id='add-cart' onClick={addItem}>
                                    <MdShoppingCart  style={{marginRight: "10px"}}/>
                                     Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="overview-container">
                                           
                    </div>
            </div>
        );
    }

}
 
export default ItemShowPage;