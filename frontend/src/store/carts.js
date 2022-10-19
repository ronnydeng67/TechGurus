
export const RECEIVE_CARTS = '/RECEIVE_CARTS'
export const RECEIVE_CART = '/RECEIVE_CART';
export const REMOVE_CART = '/RECMOVE_CART';
// export const REMOVE_ITEMS = '/REMOVE_ITEMS';

const receiveCarts = (carts) => ({
    type: RECEIVE_CARTS,
    carts
})


const receiveCart = (cart) => ({
    type: RECEIVE_CART,
    cart
})

const removeCart = (cartId) => ({
    type: REMOVE_CART,
    cartId
})



export const fetchCarts = (carts) => async disptch => {
    const res = await fetch(`/api/carts`)
    const data = await res.json();
    disptch(receiveCarts(data))
    return data;
}


export const editItem = (cart) => async disptch => {
    const { userId, itemId, quantity } = cart
    const res = await fetch(`/api/carts/${cart}`, {
        method: "PATCH",
        body: JSON.stringify({
            userId, 
            itemId,
            quantity
        })
    })
    const data = await res.json();
    disptch(receiveCart(data))
    return res
}

export const fetchCart = (cartId) => async disptch => {
    const res = await fetch(`api/carts/${cartId}`)
    const data = await res.json();
    disptch(receiveCart(data))
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
        case RECEIVE_CART:
            nextState[action.cart.id] = action.cart;
        case RECEIVE_CARTS:
            return {...nextState, ...action.carts};
        case REMOVE_CART:
            nextState[action.cartId] = null;
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