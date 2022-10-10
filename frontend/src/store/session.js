import csrfFetch from "./csrfFetch";

const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';

const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    user
})

const removeCurrentUser = () => ({
    type:REMOVE_CURRENT_USER
})

export const loginUser = (user) => async dispatch => {
    const { email, password } = user;
    const res = await csrfFetch('api/session', {
        method: 'post',
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await res.json();
    dispatch(setCurrentUser(data.user))
    return res
}

export const logoutUser = () => async dispatch => {
    const res = await csrfFetch('api/session', {
        method: 'delete'
    })
    dispatch(removeCurrentUser());
    return res
}


const sessionReducer = (state = {}, action) => {
    const nextState = {...state}
    switch(action.type) {
        case SET_CURRENT_USER: 
            return {...state, user: action.user}
        case REMOVE_CURRENT_USER:
            return {...state, user: null}
        default:
            return state;
    }
}

export default sessionReducer;