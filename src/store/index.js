import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'

import NoteAppReducer from '../reducers';

import rootSaga from '../sagas';

const initialState = {
	notes: {},
	noteEditor: {}
};

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export default () => {
	const store = createStore(NoteAppReducer, initialState, composeEnhancers(
		applyMiddleware(sagaMiddleware)
	));
	sagaMiddleware.run(rootSaga);
	return store;
};
