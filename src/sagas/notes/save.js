import {take, call} from 'redux-saga/effects';
import {NOTES_SAVE_NOTE, notesLoading} from 'actions/note';

export default function* saveNote(worker, db) {
  while (true) {
    const {noteId, text} = yield take(NOTES_SAVE_NOTE);
    yield call([db.notes, db.notes.put], {id: noteId, text, timestamp: new Date()});
    yield put(notesLoading(false));
  }
}
