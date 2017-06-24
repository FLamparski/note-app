import {take, put, call} from 'redux-saga/effects';

import {notesReadyForDisplay} from 'actions/note';
import postToPromise from '../../worker/util';

export default function* forDisplay(worker) {
  while (true) {
    const {notes} = yield take('NOTES:LOADED');
    const result = yield call(postToPromise, worker, {action: 'NOTES:FOR_DISPLAY', data: {notes}});
    yield put(notesReadyForDisplay(result));
  }
}
