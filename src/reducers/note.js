import shortid from 'shortid';
import {keyBy} from 'lodash';

import {NOTES_SAVE_NOTE, NOTES_DELETE_NOTE, NOTES_LOADED, NOTES_SORTED, NOTES_FROM_NOW_LOADED} from 'actions/note';

export default (notes, action) => {
	if (!notes) {
		return {};
	}

	switch (action.type) {
		case NOTES_DELETE_NOTE: {
			const ns = {...notes};
			delete ns[action.noteId];
			return ns;
		}
		case NOTES_SAVE_NOTE: {
			const id = action.noteId || shortid();
			return {...notes, [id]: {...(notes[id] || {}), id, text: action.text, timestamp: new Date(), fromNow: 'seconds ago'}};
		}
		case NOTES_LOADED: /* falls through */
		case NOTES_SORTED: /* falls through */
		case NOTES_FROM_NOW_LOADED:
			return keyBy(action.notes, n => n.id);
		default:
			return notes;
	}
};
