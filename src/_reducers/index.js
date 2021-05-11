import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
// import { home } from './home.reducer';

const rootReducer = combineReducers({
    authentication,
    // home,
});

export default rootReducer;