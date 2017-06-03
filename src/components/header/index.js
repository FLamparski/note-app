import {h} from 'preact'; // eslint-disable-line no-unused-vars
import {connect} from 'preact-redux';

import {AppBar} from 'react-toolbox/lib/app_bar';

import style from './style';

function Header({dispatch}) {
	return (
    <AppBar title="NoteApp" className={style.header} />
	);
}

export default connect(x => x)(Header);
