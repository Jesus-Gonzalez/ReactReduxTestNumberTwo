import React from 'react';
import { connect } from 'react-redux';

const BookDetail = ({ books, activeBook }) => {
  if (!books)
    return (<div></div>);

  if (!activeBook)
  return (
    <h4 className="col-sm-8">Choose a book</h4>
  );

  return (
    <article className="col-sm-8">
      <h1>{ activeBook.title }</h1>
      <p>{ activeBook.description }</p>
    </article>
  );
}

function mapStateToProps(state)
{
  return {
    books: state.books,
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
