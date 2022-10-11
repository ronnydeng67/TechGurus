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
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user))
    return res
}

export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
}

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}
  
const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}

export const logoutUser = () => async dispatch => {
    const res = await csrfFetch('api/session', {
        method: 'delete'
    })
    dispatch(removeCurrentUser());
    return res
}

export const signup = (user) => async dispatch =>  {
    const { name, email, password } = user;
    const res = await csrfFetch("/api/users", {
        method: 'post',
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user))
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