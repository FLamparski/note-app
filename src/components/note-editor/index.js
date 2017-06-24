import {h, Component} from 'preact'; // eslint-disable-line no-unused-vars
import {connect} from 'preact-redux';
import {Button} from 'react-toolbox/lib/button';

import style from './style';

import {saveNote} from 'actions/note';
import {noteEditorTextChanged, noteEditorClose} from 'actions/note-editor';

function NoteEditor({dispatch, noteId, text = ''}) {
	const actionsOff = !noteId && text === '';
	return (
    <div class={style.container}>
      <textarea placeholder="Note text..." class={style.entry} oninput={e => dispatch(noteEditorTextChanged(e.target.value))} value={text}></textarea>
      <Button disabled={actionsOff} raised primary type="button" onclick={() => [saveNote({noteId, text}), noteEditorClose()].map(dispatch)}>Save</Button>
      <Button disabled={actionsOff} type="button" onclick={() => dispatch(noteEditorClose())}>Cancel</Button>
    </div>
	);
}

export default connect(state => state.noteEditor)(NoteEditor);
