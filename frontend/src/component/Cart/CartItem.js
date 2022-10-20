import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteItem, editCart } from "../../store/carts";
import { fetchItem, getItem } from "../../store/items";
import './Cart.css';

const CartItem = ({item}) => {
    const dispatch = useDispatch(); 
    const itemId = item.itemId;
    const cartItem = useSelector(getItem(itemId))
    const [newQuantity, setNewQuantity] = useState(item.quantity)
    const sessionUser = useSelector(state => state.session.user);
    const cartId = item.id;

    useEffect(() => {
        dispatch(fetchItem(itemId))
    }, [dispatch, itemId])

    const updateQuantity = e => {
        console.log(typeof e.target.value)
        setNewQuantity(parseInt(e.target.value))
    }

    const handleRemove = e => {
        e.preventDefault();
        dispatch(deleteItem(cartId))
    }

    useEffect(() => {
        dispatch(editCart({id: cartId, itemId: itemId, userId: sessionUser.id, quantity: newQuantity}))
    },[newQuantity])


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
                            <select id="select" value={newQuantity} onChange={updateQuantity}> {/*need on change*/}
                                <option value={1} selected>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                            <button id="remove-button" onClick={handleRemove}>Remove</button>
                    </div>
                    <div className="cart-price">
                        ${cartItem.price}
                    </div>
            </div>
        );
    } else {
        <div className="empty-cart">Hold On...</div>
    }
}
 
export default CartItem;