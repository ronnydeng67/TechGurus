import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Cart = () => {
    const [isLoading, setIsLoading] = useState(true);
    const disptach = useDispatch();
    const cart = useSelector(state => state)

    console.log(cart)

    useEffect(() => {
        setIsLoading(false)
    },[])

    if(isLoading) {
        return <div>Nothing is in your cart</div>
    } else {
        return (
            <div className="cart-page">
                <div className="cart-item-list">
                    <div className="cart-title">
                        Your Cart
                    </div>
                    <div className='item-list'>
                        <ul className='list'>
                            
                        </ul>
                    </div>
                </div>
                <div className="right-bar">
    
                </div>
            </div>
        );
    }

}
 
export default Cart;