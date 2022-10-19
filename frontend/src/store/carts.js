
// export const RECEIVE_ITEMS = '/RECEIVE_ITEMS'
// export const RECEIVE_ITEM = '/RECEIVE_ITEM';
// export const REMOVE_ITEM = '/RECMOVE_ITEM';
// // export const REMOVE_ITEMS = '/REMOVE_ITEMS';

// const receiveItems = (carts) => ({
//     type: RECEIVE_ITEMS,
//     carts
// })

// // const addItem = (item) => ({
// //     type: RECEIVE_ITEM,
// //     item
// // })

// const receiveItem = (cart) => ({
//     type: RECEIVE_ITEM,
//     cart
// })

// const removeItem = (cartId) => ({
//     type: REMOVE_ITEM,
//     cartId
// })

// // const emptyCart = () => ({
// //     type: REMOVE_ITEMS
// // })


// export const fetchCarts = (cartId) => async disptch => {
//     const res = await fetch(`/api/cart`)
//     const data = await res.json();
//     disptch(receiveItems(data))
//     return data;
// }

// export const editItem = (cart) => async disptch => {
//     const { userId, itemId, quantity } = cart
//     const res = await fetch(`/api/cart/${cart.id}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//             userId, 
//             itemId,
//             quantity
//         })
//     })
//     const data = await res.json();
//     disptch(receiveItem(data))
//     return res
// }

// export const fetchCart = (cartId) => async disptch => {
//     const res = await fetch(`api/cart/${cartId}`)
//     const data = await res.json();
//     disptch(receiveItem(data))
//     return data;
// }


// export const deleteItem = (cartId) => async disptch => {
//     const res = await fetch(`/api/cart/${cartId}`, {
//         method: 'DELETE'
//     })
//     disptch(removeItem(cartId))
//     return res;
// }

// const cartReducer = (state = {}, action) => {
//     const nextState = {...state}
//     switch(action.type) {
//         case RECEIVE_ITEM:
//             nextState[action.carts.id] = action.cart;
//         case RECEIVE_ITEMS:
//             return {...nextState, ...action.carts};
//         case REMOVE_ITEM:
//             nextState[action.cartId] = null;
//             return nextState;
//         default:
//             return state;
//     }
// }

// export default cartReducer;