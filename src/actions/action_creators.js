import { ACTION, SELECT_BOOK } from './action_types';

export function action(param) {
	return {
		type: ACTION,
		payload: { param }
	}
};

export function selectBook(book) {
	return {
		type: SELECT_BOOK,
		payload: book
	}
};
