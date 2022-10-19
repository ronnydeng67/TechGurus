import { SET_CURRENT_USER } from "./session";
export const ADD_CART = '/ADD_CART'
export const RECEIVE_CARTS = '/RECEIVE_CARTS';
export const REMOVE_CART = '/REMOVE_CART';
// export const REMOVE_ITEMS = '/REMOVE_ITEMS';

const receiveCarts = (carts) => ({
    type: RECEIVE_CARTS,
    carts
})


const addCart = (cart) => ({
    type: ADD_CART,
    cart
})

const removeCart = (cartId) => ({
    type: REMOVE_CART,
    cartId
})

export const fetchCarts = () => async dispatch => {
    const res = await fetch('/api/carts')
    const data = await res.json();
    dispatch(receiveCarts(data));
    return data;
}

export const addToCart = (cart) => async disptch => {
    const { userId, itemId, quantity } = cart;
    const res = await fetch(`api/carts/`, {
        method: 'post',
        body: JSON.stringify(cart)
    })
    const data = await res.json();
    disptch(addCart(data))
    return data;
}


export const deleteItem = (cartId) => async disptch => {
    const res = await fetch(`/api/carts/${cartId}`, {
        method: 'DELETE'
    })
    disptch(removeCart(cartId))
    return res;
}

const cartReducer = (state = {}, action) => {
    const nextState = {...state}
    switch(action.type) {
        case SET_CURRENT_USER:
            if(!action.payload) return state;
            return { ...state, ...action.payload.carts}
        case ADD_CART:
            nextState[action.cart.itemId] = action.itemId
            return nextState;
        case REMOVE_CART:
            delete nextState[action.cartId]
            return nextState;
        case RECEIVE_CARTS:
            return action.carts;
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

// export const editCart = (item) => async dispatch => {
//     const res = await fetch(`/api/carts/${item.id}`, {
//         method: "patch",
//         body: JSON.stringify(item)
//     })
//     const data = await res.json();
//     dispatch(updateCart(data));
//     return data;
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