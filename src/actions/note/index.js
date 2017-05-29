export const NOTES_DELETE_NOTE = 'NOTES:DELETE_NOTE';
export function deleteNote(noteId) {
	return {
		type: NOTES_DELETE_NOTE,
		noteId
	};
}

export const NOTES_CREATE_NOTE = 'NOTES:CREATE_NOTE';
export function createNote() {
	return {type: NOTES_CREATE_NOTE};
}

export const NOTES_EDIT_NOTE = 'NOTES:EDIT_NOTE';
export function editNote({noteId, text}) {
	return {type: NOTES_EDIT_NOTE, noteId, text};
}
