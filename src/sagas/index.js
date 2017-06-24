import {call, put} from 'redux-saga/effects';

import {notesLoading, notesLoaded} from 'actions/note';
import db from '../database';
import notesForDisplay from './notes/for-display';
import saveNote from './notes/save';
import deleteNote from './notes/delete';

const worker = require('worker-loader!../worker')();

function* initSaga(worker, db) {
  yield put(notesLoading(true));
  const notes = yield call([db.notes, db.notes.toArray]);
  yield put(notesLoaded({notes}));
}

export default function* rootSaga() {
  yield [initSaga, notesForDisplay, saveNote, deleteNote].map(f => f(worker, db));
}
