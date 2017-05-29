import {h} from 'preact'; // eslint-disable-line no-unused-vars

import {Button} from 'react-toolbox/lib/button';

import style from './style';

export default function Header() {
	return (
    <header class={style.header}>
      <h1>NoteApp</h1>
      <nav class={style.toolbar}>
        <Button primary raised label="Add note" />
      </nav>
    </header>
	);
}
