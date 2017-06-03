import shortid from 'shortid';

import {NOTES_SAVE_NOTE, NOTES_DELETE_NOTE} from 'actions/note';

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
			return {...notes, [id]: {...(notes[id] || {}), text: action.text, timestamp: new Date(), fromNow: 'seconds ago'}};
		}
		default:
			return notes;
	}
};
