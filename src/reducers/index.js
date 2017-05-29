import {combineReducers} from 'redux';

import NotesReducer from './notes';

export default combineReducers({
	notes: NotesReducer
});
