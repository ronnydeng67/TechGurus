import csrfFetch from "./csrfFetch";

export const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';

const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload
})

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
})

export const loginUser = (user) => async dispatch => {
    const { email, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'post',
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await res.json();
    storeCurrentUser(data.user);

    dispatch(setCurrentUser(data))
    return res
}

export const logoutUser = () => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'delete'
    })
    // console.log(res)
    storeCurrentUser(null);
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

export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    debugger
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

const initState = {
    user: JSON.parse(sessionStorage.getItem("currentUser"))
}

const sessionReducer = (state = initState, action) => {
    const nextState = {...state}
    switch(action.type) {
        case SET_CURRENT_USER: 
            if(!action.payload) return state;
            return {...nextState, user: action.payload.user}
        case REMOVE_CURRENT_USER:
            return {...nextState, user: null}
        default:
            return state;
    }
}

export default sessionReducer;