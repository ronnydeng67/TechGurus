import csrfFetch from "./csrfFetch";

const RECEIVE_USERS = 'users/RECEIVE_USERS';
const RECEIVE_USER = 'users/RECEIVE_USER';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const getUsers = ({ users }) => (users ? Object.values(users): []);
export const getUser = userId => ({ users }) => (users ? users[userId] : [])

export const fetchUsers = () => async dispatch => {
    const res = await csrfFetch('/api/users')
    const data = await res.json();
    dispatch(receiveUsers(data));
}

export const getchUser = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}`)
    const data = await res.json();
    dispatch(receiveUser(data));
}

const userReducer = (state ={}, action) => {
    const nextState = { ...state };
    switch (action.type) {
        case RECEIVE_USERS: 
            return {...nextState, ...action.users}
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState;
        default:
            return state;
    }
}

export default userReducer;