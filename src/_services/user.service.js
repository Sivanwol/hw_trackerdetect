import config from '../settings';
import {authHeader} from "../_helpers";
import {handleResponse, logout} from "../_helpers/common";

export const userService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.backend_api}/login`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(data.rows[0]));
            return data[0];
        });
}