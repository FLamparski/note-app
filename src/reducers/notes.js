import shortid from 'shortid';

import {NOTES_CREATE_NOTE, NOTES_EDIT_NOTE, NOTES_DELETE_NOTE} from 'actions/note';

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
		case NOTES_CREATE_NOTE:
			return {...notes, [shortid()]: {text: '', timestamp: new Date(), fromNow: 'seconds ago'}};
		case NOTES_EDIT_NOTE:
			return {...notes, [action.noteId]: {...notes[action.noteId], text: action.text}};
		default:
			return notes;
	}
};
