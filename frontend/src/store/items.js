

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const SEARCH_ITEM = 'SEARCH_ITEM';

const receiveItems = items => ({
    type: RECEIVE_ITEMS,
    items
})

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
})


export const getItems = (state) => (state.items ? Object.values(state.items) : []);
export const getItem = (itemId) => (state.items ? state.items[itemId] : null)

export const fetchItems = () => async dispatch => {
    const res = await fetch('api/items')
    const data = await res.json();
    dispatch(receiveItems(data))
}

export const fetchItem = (itemId) => async dispatch => {
    const res = await fetch(`api/items/${itemId}`);
    const data = await res.json();
    dispatch(receiveItem(data))
}

const itemsReducer = (state={}, action) => {
    switch (action.type) {
        case(RECEIVE_ITEMS):
            return action.items;
        case(RECEIVE_ITEM):
            const item = action.item;
            return { ...state, [item.id]: item }
        default:
            return state;
    }
}