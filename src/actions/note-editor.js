export const NOTE_EDITOR_OPEN = 'NOTE_EDITOR:OPEN';
export function noteEditorOpen({noteId, text}) {
  return {
    type: NOTE_EDITOR_OPEN,
    noteId,
    text
  };
}

export const NOTE_EDITOR_TEXT_CHANGED = 'NOTE_EDITOR:TEXT_CHANGED';
export function noteEditorTextChanged(text) {
  return {
    type: NOTE_EDITOR_TEXT_CHANGED,
    text
  };
}

export const NOTE_EDITOR_CLOSE = 'NOTE_EDITOR:CLOSE';
export function noteEditorClose() {
  return {
    type: NOTE_EDITOR_CLOSE
  };
}
