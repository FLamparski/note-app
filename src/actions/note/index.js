export const NOTES_DELETE_NOTE = 'NOTES:DELETE_NOTE';
export function deleteNote(note) {
	return {
		type: NOTES_DELETE_NOTE,
		noteId: note.id
	};
}
