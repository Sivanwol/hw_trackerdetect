import config from '../settings';
import {authHeader} from "../_helpers";
import {handleResponse} from "../_helpers/common";

export const segmentsService = {
    get_all_segments
}

function get_all_segments() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.backend_api}/scenarios`, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        });
}


