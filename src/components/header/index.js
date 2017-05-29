import {h} from 'preact'; // eslint-disable-line no-unused-vars

import style from './style';

export default function Header() {
	return (<h1 class={style.header}>NoteApp</h1>);
}
