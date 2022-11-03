import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import './Cart.css'
import { deleteItem, emptyAll, fetchCarts } from '../../store/carts';
import CartItem from './CartItem';

const Cart = () => {
    const { cartId } = useParams();
    // const [cartItems, setCartItems] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const cart = useSelector(state => state.carts)

    // console.log(typeof(Object.values(cart)[0].quantity))

    if (!sessionUser) return history.push('/login');
    let itemList = [];


    let totalPrice = 0;
    // console.log('okokokokok')
    if (Object.values(cart).length > 0) {
        itemList = Object.values(cart).map(item => {
            totalPrice += (item.price * item.quantity);
            console.log(parseInt(item.price))
            return <CartItem key={item.id} item={item} />
        })
    } else {
        itemList = (
        <div className='empty-cart-container'>
            Your Cart is Currently empty
            <div className="recommended">
                Need inspiration? Check out our&nbsp;<Link to="/">Recommended items</Link>.
            </div>
        </div>)
    }

    const handleCheckout = e => {
        e.preventDefault();
        dispatch(emptyAll(sessionUser.id))
        alert('Order Placed!!')
    }


    if (cart) {
        return (
            <div className="cart-page">
                <div className="cart-item-list">
                    <div className="cart-title">
                        Your Cart
                    </div>
                    <div className="inner">
                        <div className='list'>
                             {itemList}
                        </div>
                    </div>
                </div>
                <div className="right-bar">
                    <div className="order-summary">
                        <div className="summary-text">
                            Order Summary
                        </div>
                        <hr className='cart-hr'/>
                        <div className="order-details">
                            <div className="order-text">
                                Original Price <br />
                                Shipping <br />
                                Store Pickup <br />
                                Estimated Saled Tax <br />
                            </div>
                            <div className="order-price">
                                ${totalPrice}<br />
                                Free <br />
                                Free <br />
                                ${parseFloat((totalPrice * 0.0875)).toFixed(2)} <br />
                            </div>
                        </div>
                        <hr className='cart-hr'/>
                        <div className="order-total">
                            <div className="total-text">Total</div>
                            <div className="total-num">${parseFloat(totalPrice * 1.0875).toFixed(2)}</div>
                        </div>
                        <div className="checkout-container">
                            <button id="checkout" onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        <div className='list'>Your cart is empty</div>
    }
    // if(isLoading) {
    //     return <div>Your cart is empty right now.</div>
    // } else {
    // }
        
    }
    
export default Cart;