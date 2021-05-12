import {segmentsConstants} from '../_constants';
import {segmentsService} from '../_services';
import {alertActions} from './';

export const segmentsActions = {
    get_all_segments,
    create_segments,
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

    function failure(error) {return {type: segmentsConstants.GET_ALL_Segment_FAILURE, error} }
    function success(items) {return {type: segmentsConstants.GET_ALL_Segment_SUCCESS, items} }
    function request() {return {type: segmentsConstants.GET_ALL_Segment_REQUEST} }
}

function create_segments(name, description) {
    return dispatch => {
        dispatch(request(name, description));

        segmentsService.create_segments(name, description)
            .then(
                data => {
                    dispatch(success(data.rows));
                    dispatch(alertActions.success('Segment Saved'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function failure(error) {return {type: segmentsConstants.Create_Segment_FAILURE, error} }
    function success(items) {return {type: segmentsConstants.Create_Segment_SUCCESS, items} }
    function request(name, description) {return {type: segmentsConstants.Create_Segment_REQUEST, name, description} }
}