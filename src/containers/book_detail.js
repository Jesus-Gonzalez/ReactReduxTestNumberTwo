import React from 'react';
import { connect } from 'react-redux';

const BookDetail = ({ books, activeBook }) => {
  if (!books)
    return (<div></div>);

  if (!activeBook)
  return (
    <h4 className="col-xs-7">Choose a book</h4>
  );

  return (
    <article className="col-xs-7">
      <h1>{ activeBook.title }</h1>
      <p>{ activeBook.description }</p>
    </article>
  );
}

function mapStateToProps({ books, activeBook})
{
  return { books, activeBook };
}

export default connect(mapStateToProps)(BookDetail);
