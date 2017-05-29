import {h} from 'preact'; // eslint-disable-line no-unused-vars
import {connect} from 'preact-redux';

import {Button} from 'react-toolbox/lib/button';

import style from './style';

import {createNote} from 'actions/note';

function Header({dispatch}) {
	return (
    <header class={style.header}>
      <h1>NoteApp</h1>
      <nav class={style.toolbar}>
        <Button primary raised label="Add note" onClick={() => dispatch(createNote())} />
      </nav>
    </header>
	);
}

export default connect(x => x)(Header);
