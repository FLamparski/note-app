import {take, put, call} from 'redux-saga/effects';

import postToPromise from '../../worker/util';

export default function* notesFromNow(worker) {
  const {notes} = yield take('NOTES:SORTED');
  const computed = yield call(postToPromise, worker, {action: 'NOTES:FROM_NOW', data: {notes}});
  yield put({type: 'NOTES:FROM_NOW_LOADED', notes: computed.notes});
}
