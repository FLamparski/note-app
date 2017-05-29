import {h, Component} from 'preact'; // eslint-disable-line no-unused-vars
import {connect} from 'preact-redux';

import style from './style';

import Note from 'components/note';
import {deleteNote} from 'actions/note';

function NoteList({notes, dispatch}) {
	if (Object.keys(notes).length > 0) {
		return (
			<main class={style.noteGrid}>
				{Object.keys(notes).map(id => <Note note={notes[id]} onDelete={() => dispatch(deleteNote(id))} />)}
			</main>
		);
	}
	return (
			<main class={style.noteGrid}>
				<div class={style.noNotes}>No notes</div>
			</main>
	);
}

export default connect(state => state)(NoteList);
