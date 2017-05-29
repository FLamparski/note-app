import {h} from 'preact'; // eslint-disable-line no-unused-vars

import style from './style';

export default ({note, onDelete}) => (
  <div class={style.note}>
    <pre>{note.text}</pre>
    <hr />
    <div class={style.toolbar}>
      <div class={style.date}>{note.timestamp.toISOString()}</div>
      <button class={style.button} onClick={onDelete}>&times;</button>
    </div>
  </div>
);
