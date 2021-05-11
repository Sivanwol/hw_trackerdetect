import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
// import { home } from './home.reducer';

const rootReducer = combineReducers({
    authentication,
    alert
    // home,
});

export default rootReducer;