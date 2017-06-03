import { NOTE_EDITOR_OPEN, NOTE_EDITOR_TEXT_CHANGED, NOTE_EDITOR_CLOSE } from 'actions/note-editor';

export default (editor, action) => {
  if (!editor) {
		return {
      noteId: null,
      text: ''
    };
	}

  switch (action.type) {
    case NOTE_EDITOR_OPEN:
      return {...editor, noteId: action.noteId, text: action.text};
    case NOTE_EDITOR_TEXT_CHANGED:
      return {...editor, text: action.text};
    case NOTE_EDITOR_CLOSE:
      return {...editor, noteId: null, text: ''};
    default:
      return editor;
  }
};
