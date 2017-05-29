import {createStore} from 'redux';

import NoteAppReducer from '../reducers';

const initialState = {
	notes: {}
};

export default () => createStore(NoteAppReducer, initialState, typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
