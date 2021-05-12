import {segmentsConstants} from '../_constants';
import {segmentsService} from '../_services';
import {alertActions} from './';

export const segmentsActions = {
    get_all_segments,
};

function get_all_segments() {
    return dispatch => {
        dispatch(request());

        segmentsService.get_all_segments()
            .then(
                data => {
                    dispatch(success(data.rows));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() {
        return {type: segmentsConstants.GET_ALL_Segment_REQUEST}
    }

    function success(items) {
        return {type: segmentsConstants.GET_ALL_Segment_SUCCESS, items}
    }

    function failure(error) {
        return {type: segmentsConstants.GET_ALL_Segment_FAILURE, error}
    }
}