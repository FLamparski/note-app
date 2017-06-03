import {h} from 'preact'; // eslint-disable-line no-unused-vars
// import {connect} from 'preact-redux';

import {AppBar} from 'react-toolbox/lib/app_bar';

import style from './style';

export default function Header() {
	return (
    <AppBar title="NoteApp" className={style.header} />
	);
}

// Export default connect(x => x)(Header);
