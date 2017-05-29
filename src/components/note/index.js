import {h} from 'preact'; // eslint-disable-line no-unused-vars

import style from './style';

export default function Note({note, onDelete}) {
	return (
    <div class={style.note}>
      <pre>{note.text}</pre>
      <hr />
      <div class={style.toolbar}>
        <div class={style.date}>{note.fromNow}</div>
        <button class={style.button} onClick={onDelete}>&times;</button>
      </div>
    </div>
	);
}
