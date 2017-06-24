import {keyBy} from 'lodash';

import {NOTES_SAVE_NOTE, NOTES_DELETE_NOTE, NOTES_LOADED, NOTES_SORTED, NOTES_READY_FOR_DISPLAY, NOTES_IS_LOADING} from 'actions/note';

export default (notes, action) => {
	if (!notes) {
		return {
			isLoading: true,
			elements: {},
			order: []
		};
	}

	switch (action.type) {
		case NOTES_DELETE_NOTE: {
			const es = {...notes.elements};
			delete es[action.noteId];
			return {elements: es, order: notes.order.filter(id => id !== action.noteId), isLoading: true};
		}
		case NOTES_SAVE_NOTE: {
			const id = action.noteId;
			const es = {...notes.elements, [id]: {...(notes[id] || {}), id, text: action.text, timestamp: new Date(), fromNow: 'seconds ago'}};
			return {elements: es, order: [id].concat(notes.order.filter(i => i !== id)), isLoading: true};
		}
		case NOTES_READY_FOR_DISPLAY:
			return {elements: keyBy(action.notes, n => n.id), order: action.order, isLoading: false};
		case NOTES_IS_LOADING:
			return {...notes, isLoading: action.isLoading};
		default:
			return notes;
	}
};
