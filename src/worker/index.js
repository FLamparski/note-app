import notesForDisplay from './notes/for-display';

const handlers = {
  'NOTES:FOR_DISPLAY': notesForDisplay
};

self.onmessage = e => self.postMessage(handlers[e.data.action](e.data.data));
