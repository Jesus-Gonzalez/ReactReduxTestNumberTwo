import axios from 'axios';

import { FETCH_BOOKS } from './action_types';

const BOOK_DATABASE_URI = './book_store.json';

export const fetchBookPending = () => ({
	type: `${FETCH_BOOKS}_PENDING`
});

export const fetchBookSuccess = ({ books, category }) => ({
	type: `${FETCH_BOOKS}_SUCCESS`,
	payload: { books, category },
});

export const fetchBookError = (err) => ({
	type: `${FETCH_BOOKS}_ERROR`,
	payload: err,
});

export function fetchBooks(category) {
	return (dispatch) => {
		dispatch(fetchBookPending());

		const request = axios.get(BOOK_DATABASE_URI);

		request
			.then(response => {
				dispatch(fetchBookSuccess({ books: response.data, category }));
			})
			.catch(err => dispatch(fetchBookError(err)));
	};
}
