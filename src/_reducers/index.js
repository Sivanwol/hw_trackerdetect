import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { segments } from './segments.reducer';

const rootReducer = combineReducers({
    authentication,
    alert,
    segments
});

export default rootReducer;