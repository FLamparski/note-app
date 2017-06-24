import {take, call, put} from 'redux-saga/effects';
import {NOTES_DELETE_NOTE, notesLoading} from 'actions/note';

export default function* deleteNote(worker, db) {
  while (true) {
    const {noteId} = yield take(NOTES_DELETE_NOTE);
    yield call([db.notes, db.notes.delete], noteId);
    yield put(notesLoading(false));
  }
}
