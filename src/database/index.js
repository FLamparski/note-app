import Dexie from 'dexie';

const db = new Dexie('note-app');

db.version(1).stores({
  notes: '&id,text,timestamp'
});

export default db;
