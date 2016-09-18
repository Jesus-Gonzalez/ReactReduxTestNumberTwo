import React from 'react';
import { render } from 'react-dom';

import CategoryList from '../containers/category_list';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

const App = () => (
	<div className="container">
		<header>
			<CategoryList />
		</header>

		<section id="book-store-content">
			<BookList />
			<BookDetail />
		</section>
	</div>
);

export default App;
