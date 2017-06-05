import sortNotes from './notes/sort';
import notesFromNow from './notes/from-now';

const handlers = {
  'NOTES:SORT': sortNotes,
  'NOTES:FROM_NOW': notesFromNow
};

self.onmessage = e => self.postMessage(handlers[e.data.action](e.data.data));
