import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import './Cart.css'
import RightBar from './RightBar';
import { fetchCarts } from '../../store/carts';
import CartItem from './CartItem';

const Cart = () => {
    const { cartId } = useParams();
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const cart = useSelector(state => state.carts)

    console.log(cart)
    // useEffect(() => {
    //     disptach(fetchCarts()
    //         .then(res => {
    //             setCartItem(Object.values(res))
    //         .then(() => {
    //             setIsLoading(false)
    //         })
    //         })
    //     )
    //     setIsLoading(false)
    // },[])

    // useEffect(() => {
    //     dispatch(fetchCarts()).then((res) => {
    //         setCartItems(res)
    //     }).then(()=> {
    //         setIsLoading(false)
    //     })
    // }, [])

    if (!sessionUser) return history.push('/login');
    let itemList = [];
    if (cart) {
        itemList = Object.values(cart).map(item => <CartItem key={item.id} item={item} />)
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

                </div>
            </div>
        );
    } else {
        <div>Your cart is empty</div>
    }
    // if(isLoading) {
    //     return <div>Your cart is empty right now.</div>
    // } else {
    // }
        
    }
    
export default Cart;