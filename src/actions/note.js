export const NOTES_DELETE_NOTE = 'NOTES:DELETE_NOTE';
export function deleteNote(noteId) {
	return {
		type: NOTES_DELETE_NOTE,
		noteId
	};
}

export const NOTES_SAVE_NOTE = 'NOTES:SAVE_NOTE';
export function saveNote({noteId, text}) {
	return {type: NOTES_SAVE_NOTE, noteId, text};
}
