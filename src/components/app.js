import {h, Component} from 'preact'; // eslint-disable-line no-unused-vars
import {Provider} from 'preact-redux';

import createStore from '../store';

import Header from 'components/header';
import NoteList from 'components/note-list';
import NoteEditor from 'components/note-editor';

import style from './app.less';

const store = createStore();

export default function App() {
	return (<Provider store={store}>
    <div class={style.app}>
      <Header />
			<div class={style.content}>
				<NoteEditor />
	      <NoteList />
			</div>
    </div>
  </Provider>
	);
}
