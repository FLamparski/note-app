import moment from 'moment';

export default function forDisplay({notes}) {
  notes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  return {
    order: notes.map(n => n.id),
    notes: notes.map(n => ({...n, fromNow: moment(n.timestamp).fromNow()}))
  };
}
