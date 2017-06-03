import {combineReducers} from 'redux';

import NoteReducer from './note';
import NoteEditorReducer from './note-editor';

export default combineReducers({
	notes: NoteReducer,
	noteEditor: NoteEditorReducer
});
