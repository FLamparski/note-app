import moment from 'moment';

export default function notesFromNow({notes}) {
  return {
    notes: notes.map(n => ({...n, fromNow: moment(n.timestamp).fromNow()}))
  };
}
