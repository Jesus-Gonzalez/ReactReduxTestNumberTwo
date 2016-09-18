import { SELECT_BOOK } from './action_types';

export function selectBook(book) {
	return {
		type: SELECT_BOOK,
		payload: book
	}
};
