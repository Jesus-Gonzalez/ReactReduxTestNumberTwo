import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectBook from '../actions/action_creators';

const BookList = ({ activeBook, books, actions }) => {
  if (!books)
  return (
    <div className="alert alert-primary">
      <h4 className="alert-heading">Choose a category</h4>
      <p>Choose a category in order to show its books</p>
    </div>
  );

  const $books = books.map(book => (
    <li className={'list-group-item' + (activeBook && activeBook.isbn === book.isbn ? ' active' : '')}
        key={book.isbn}
        onClick={() => actions.selectBook(book)}>
      {book.title}
    </li>
  ));

  return (
    <ul id="book-list" className="col-sm-4 list-group">
      {$books}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
		activeBook: state.activeBook,
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ selectBook }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
