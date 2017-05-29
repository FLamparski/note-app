/* eslint-env mocha */
import expect from 'expect.js';
import notesReducer from '../src/reducers/notes';
import {deleteNote, createNote, editNote} from 'actions/note';

describe('Notes reducer', () => {
	it('should allow deleting notes', () => {
		const s0 = {
			0: {text: 'lol'},
			1: {text: 'wut'}
		};
		const s1 = notesReducer(s0, deleteNote('1'));
		expect(Object.keys(s1)).to.have.length(1);
		expect(s1['0']).to.equal(s0['0']);
	});

	it('should allow adding new notes', () => {
		const s0 = {};
		const s1 = notesReducer(s0, createNote());
		expect(Object.keys(s1)).to.have.length(1);
	});

	it('should allow editing notes', () => {
		const s0 = {
			0: {text: 'foo'}
		};
		const s1 = notesReducer(s0, editNote({noteId: '0', text: 'bar'}));
		expect(s1['0'].text).to.equal('bar');
	});
});
