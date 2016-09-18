import { combineReducers } from 'redux';

import booksReducer from './reducer_books';
import activeBookReducer from './reducer_active_book';
import activeCategoryReducer from './reducer_active_category';

export default combineReducers({
	books: booksReducer,
	activeBook: activeBookReducer,
	activeCategory: activeCategoryReducer
});
