/* eslint-env mocha */
import expect from 'expect.js';
import notesReducer from '../src/reducers/notes';
import {deleteNote} from 'actions/note';

describe('Notes reducer', () => {
	it('should allow deleting notes', () => {
		const s0 = [
      {id: '1', text: 'Lol'},
      {id: '2', text: 'What'}
		];
		const s1 = notesReducer(s0, deleteNote(s0[1]));
		expect(s1).to.have.length(1);
		expect(s1[0]).to.equal(s0[0]);
	});
});
