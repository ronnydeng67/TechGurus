import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItem, getItem } from "../../store/items";
import './Cart.css';

const CartItem = ({item}) => {
    const dispatch = useDispatch(); 
    const itemId = item.itemId;
    const cartItem = useSelector(getItem(itemId))

    useEffect(() => {
        dispatch(fetchItem(itemId))
    }, [dispatch, itemId])

    console.log(cartItem)

    if (cartItem) {
        return (
            <div className="cart-item-container">
                    <Link to={`/items/${cartItem.id}`}>
                        <div className="item-img">
                            <img src={cartItem.photoUrl} id="item-pic" alt="" />
                        </div>
                    </Link>
                    <div className="cart-item-name">
                        <Link to={`/items/${cartItem.id}`}>
                            {cartItem.name}
                        </Link>
                    </div>

                    <div className="quantity-list">
                        <div className="select">
                            <select id="select"> {/*need on change*/}
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                            <button id="remove-button">Remove</button>
                    </div>
                    <div className="cart-price">
                        ${cartItem.price}
                    </div>
            </div>
        );
    } else {
        <div>Hold On...</div>
    }
}
 
export default CartItem;