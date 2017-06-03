import {h, Component} from 'preact'; // eslint-disable-line no-unused-vars
import {Provider} from 'preact-redux';

import createStore from '../store';

import Header from 'components/header';
import NoteList from 'components/note-list';
import NoteEditor from 'components/note-editor';

const store = createStore();

export default function App() {
	return (<Provider store={store}>
    <div>
      <Header />
			<NoteEditor />
      <NoteList />
    </div>
  </Provider>
	);
}
