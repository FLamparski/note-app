import shortid from 'shortid';

export const NOTES_DELETE_NOTE = 'NOTES:DELETE_NOTE';
export function deleteNote(noteId) {
	return {
		type: NOTES_DELETE_NOTE,
		noteId
	};
}

export const NOTES_SAVE_NOTE = 'NOTES:SAVE_NOTE';
export function saveNote({noteId, text}) {
	return {type: NOTES_SAVE_NOTE, noteId: noteId || shortid(), text};
}

export const NOTES_LOADED = 'NOTES:LOADED';
export function notesLoaded({notes}) {
	return {type: NOTES_LOADED, notes};
}

export const NOTES_READY_FOR_DISPLAY = 'NOTES:READY_FOR_DISPLAY';
export function notesReadyForDisplay({notes, order}) {
	return {type: NOTES_READY_FOR_DISPLAY, notes, order};
}

export const NOTES_IS_LOADING = 'NOTES:IS_LOADING';
export function notesLoading(isLoading) {
	return {type: NOTES_IS_LOADING, isLoading};
}
