import {createStore} from 'redux';

import NoteAppReducer from '../reducers';

const initialState = {
	notes: [
		{
			id: '1',
			text: 'First note',
			fromNow: 'seconds ago',
			timestamp: new Date()
		},
		{
			id: '2',
			text: 'Second note',
			fromNow: 'seconds ago',
			timestamp: new Date()
		},
		{
			id: '3',
			text: 'Third note',
			fromNow: 'seconds ago',
			timestamp: new Date()
		}
	]
};

export default () => createStore(NoteAppReducer, initialState, typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
