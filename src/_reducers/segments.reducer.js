import { segmentsConstants } from '../_constants';

const initialState = {
    segments_items: []
};

export function segments(state = initialState, action) {
    switch (action.type) {
        case segmentsConstants.GET_ALL_Segment_REQUEST:
            return {
                segments_items: action.items
            };
        case segmentsConstants.GET_ALL_Segment_SUCCESS:
            return {
                segments_items: action.items
            };
        case segmentsConstants.GET_ALL_Segment_FAILURE:
            return {
                segments_items: []
            };
        default:
            return state
    }
}