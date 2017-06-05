import {take, put, call} from 'redux-saga/effects';

import postToPromise from '../../worker/util';

export default function* sortNotes(worker) {
  const {notes} = yield take('NOTES:LOADED');
  const sorted = yield call(postToPromise, worker, {action: 'NOTES:SORT', data: {notes}});
  yield put({type: 'NOTES:SORTED', notes: sorted.notes});
}
