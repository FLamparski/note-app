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

export const NOTES_LOADED = 'NOTES:LOADED';
export function notesLoaded({notes}) {
	return {type: NOTES_LOADED, notes};
}

export const NOTES_SORTED = 'NOTES:SORTED';
export function notesSorted({notes}) {
	return {type: NOTES_SORTED, notes};
}

export const NOTES_FROM_NOW_LOADED = 'NOTES:FROM_NOW_LOADED';
export function notesFromNowLoaded({notes}) {
	return {type: NOTES_FROM_NOW_LOADED, notes};
}
