import csrfFetch from "./csrfFetch";
import { SET_CURRENT_USER } from "./session";
export const ADD_CART = '/ADD_CART'
export const RECEIVE_CART = '/RECEIVE_CART';
export const RECEIVE_CARTS = '/RECEIVE_CARTS';
export const REMOVE_CART = '/REMOVE_CART';

const receiveCarts = (carts) => ({
    type: RECEIVE_CARTS,
    carts
})

const receiveCart = (cart) => ({
    type: RECEIVE_CART,
    cart
})

const addCart = (cart) => ({
    type: ADD_CART,
    cart
})

const removeCart = (cartId) => ({
    type: REMOVE_CART,
    cartId
})

export const getCarts = ({carts}) => ( carts ? Object.values(carts) : [] ) 

export const fetchCarts = () => async dispatch => {
    const res = await csrfFetch('/api/carts')
    const data = await res.json();
    dispatch(receiveCarts(data));
}

export const editCart = (cart) => async dispatch => {
    const res = await csrfFetch(`/api/carts/${cart.id}`, {
        method: "PATCH",
        body: JSON.stringify(cart),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    dispatch(receiveCart(data));
}

export const addToCart = (cart) => async dispatch => {
    const { userId, itemId, quantity } = cart;
    const res = await csrfFetch(`/api/carts/`, {
        method: 'post',
        body: JSON.stringify(cart)
    })
    const data = await res.json();
    dispatch(addCart(data))
}


export const deleteItem = (cartId) => async dispatch => {
    const res = await csrfFetch(`/api/carts/${cartId}`, {
        method: 'DELETE'
    })
    dispatch(removeCart(cartId))
}

const cartReducer = (state = {}, action) => {
    const nextState = {...state}
    switch(action.type) {
        case SET_CURRENT_USER:
            if(!action.payload) return state;
            return { ...state, ...action.payload.carts}
        case ADD_CART:
            nextState[action.cart.id] = action.cart
            return nextState;
        case REMOVE_CART:
            delete nextState[action.cartId]
            return nextState;
        case RECEIVE_CARTS:
            if (!action.carts) return state;
            return action.carts;
        case RECEIVE_CART:
            nextState[action.cart.id] = action.cart;
            return nextState;
        default:
            return state;
    }
}

export default cartReducer;


// export const ADD_TO_CART = '/ADD_TO_CART';
// export const RECEIVE_CART = '/RECEIVE_ITEMS';
// export const UPDATE_CART = '/UPDATE_CART';
// export const DELETE_ITEM = '/DELETE_ITEM';

// const receiveCart = (items) => ({
//     type: RECEIVE_CART,
//     items
// })

// const addItem = (item) => ({
//     type: ADD_TO_CART,
//     item
// })

// const updateCart = (item) => ({
//     type: UPDATE_CART,
//     item
// })

// const deleteItem = (itemId) => ({
//     type: DELETE_ITEM,
//     itemId
// })

// export const fetchCart = () => async dispatch => {
//     const res = await fetch('/api/carts')
//     const data = await res.json();
//     dispatch(receiveCart(data));
//     return data;
// }

// export const addToCart = (item) => async dispatch => {
//     const res = await fetch('/api/carts', {
//         method: 'post',
//         body: JSON.stringify(item)
//     })
//     const data = await res.json();
//     dispatch(addItem(data));
//     return data;
// }

// export const deleteCartItem = (itemId) => async dispatch => {
//     const res = await fetch(`/api/carts`, {
//         method: 'delete',
//     })

//     dispatch(deleteItem(itemId))
//     return res
// }



// const cartReducer = (state = {}, action) => {
//     const nextState = {...state}
//     switch(action.type) {
//         case ADD_TO_CART:
//             if (nextState[action.item.id]) {
//                 nextState[action.item.id].quantity += 1;
//             } else {
//                 nextState[action.item] = item;
//             }
//             return nextState;
//         case UPDATE_CART:
//             if (nextState[action.item.id]) {
//                 nextState[action.item] = item;
//             }
//             return nextState;
//         case DELETE_ITEM:
//             delete nextState[action.itemId];
//             return nextState;
//         default:
//             return state;
//     }
// }

// export default cartReducer;