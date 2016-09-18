import { SELECT_BOOK } from './action_types';

export default function selectBook(book) {
	return {
		type: SELECT_BOOK,
		payload: book
	};
}
