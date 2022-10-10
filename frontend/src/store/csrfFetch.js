

async function csrfFetch(url, options = {}) {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
          options.headers['Content-Type'] || 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }

    const res = await fetch(url, options)

    if(res.status >= 400) throw res;

    return res
}

// export function storeCSRFToken(response) {
//     const csrfToken = response.headers.get("X-CSRF-Token");
//     if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
// }

// const storeCurrentUser = user => {
//     if(user) sessionStorage.setItem("currentUser", JSON.stringify(user));
//     else sessionStorage.removeItem("currentUser");
// }
  
// export async function restoreCSRF() {
//     const response = await csrfFetch("/api/session");
//     storeCSRFToken(response);
//     return response;
// }

// export const restoreSession = () => async dispatch => {
//     const res = await csrfFetch("/api/session");
//     storeCSRFToken(res);
//     const data = await res.json();
//     storeCurrentUser(data.user);
//     dispatch(setCurrentUser(data.user));
//     return res;
// }

export default csrfFetch;