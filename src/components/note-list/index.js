import {h, Component} from 'preact'; // eslint-disable-line no-unused-vars
import {connect} from 'preact-redux';

import style from './style';

import Note from 'components/note';
import {deleteNote} from 'actions/note';
import {noteEditorOpen} from 'actions/note-editor';

function NoteList({elements, order, isLoading, dispatch}) {
	if (isLoading) {
		return (
				<main class={style.noteGrid}>
					<div class={style.noNotes}>Loading...</div>
				</main>
		);
	}
	if (order && order.length > 0) {
		return (
			<main class={style.noteGrid}>
				{order.map(id => <Note note={elements[id]} onDelete={() => dispatch(deleteNote(id))} onEdit={() => dispatch(noteEditorOpen({noteId: id, text: elements[id].text}))} />)}
			</main>
		);
	}
	return (
			<main class={style.noteGrid}>
				<div class={style.noNotes}>No notes</div>
			</main>
	);
}

export default connect(state => state.notes)(NoteList);
