import {NOTES_DELETE_NOTE} from 'actions/note';

export default (notes, action) => {
	if (!notes) {
		return [];
	}

	switch (action.type) {
		case NOTES_DELETE_NOTE:
			return notes.filter(note => note.id !== action.noteId);
		default:
			return notes;
	}
};
