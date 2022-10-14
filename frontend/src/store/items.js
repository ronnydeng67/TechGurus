

export const RECEIVE_ITEMS = '/RECEIVE_ITEMS';
export const RECEIVE_ITEM = '/RECEIVE_ITEM';
export const SEARCH_ITEM = '/SEARCH_ITEM';

const receiveItems = items => ({
    type: RECEIVE_ITEMS,
    items
})

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
})


export const getItem = itemId => ({ items }) => (items ? items[itemId] : null)
export const getItems = ({ items }) => (items ? Object.values(items) : []);

export const fetchItems = () => async dispatch => {
    const res = await fetch('api/items')
    const data = await res.json();
    dispatch(receiveItems(data))
}

export const fetchItem = (item) => async dispatch => {
    const res = await fetch(`api/items/${item.id}`);
    const data = await res.json();
    dispatch(receiveItem(data))
}

const itemsReducer = (state={}, action) => {
    const nextState = { ...state }
    switch (action.type) {
        case(RECEIVE_ITEMS):
            const asd = action.items
            return {...nextState, ...asd }
        case(RECEIVE_ITEM):
            return action.item
            // return nextState
        default:
            return state;
    }
}

export default itemsReducer;