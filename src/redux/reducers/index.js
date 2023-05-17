import { combineReducers } from 'redux';
import authReducer from './authReducer';
import ticketReducer from './ticketReducer';

// import movieReducer from './movieReducer';
// import showtimeReducer from './showtimeReducer';
// import bookingReducer from './bookingReducer';
// import cineplexReducer from './cineplexReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ticket: ticketReducer,
});

export default rootReducer;
