import sortNotes from './notes/sort';
import notesFromNow from './notes/from-now';

const worker = require('worker-loader!../worker')();

export default function* rootSaga() {
  yield [sortNotes, notesFromNow].map(f => f(worker));
}
