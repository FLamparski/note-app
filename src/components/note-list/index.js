import {h, Component} from 'preact'; // eslint-disable-line no-unused-vars
import {connect} from 'preact-redux';

import style from './style';

import Note from 'components/note';
import {deleteNote} from 'actions/note';

function NoteList({notes, dispatch}) {
	if (notes.length) {
		return (
			<main class={style.noteGrid}>
				{notes.map(note => <Note note={note} onDelete={() => dispatch(deleteNote(note))} />)}
			</main>
		);
	} else {
		return (
			<main class={style.noteGrid}>
				<div class={style.noNotes}>No notes</div>
			</main>
		);
	}
}

export default connect(state => state)(NoteList);
