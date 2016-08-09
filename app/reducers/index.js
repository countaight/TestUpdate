import { combineReducers } from 'redux';

import user from './userReducer';
import navReducer from './navReducer';
import tabReducer from './tabReducer';

export default combineReducers({
	user,
	navReducer,
	tabReducer
})