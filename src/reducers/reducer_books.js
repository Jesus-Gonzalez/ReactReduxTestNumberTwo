import { FETCH_BOOKS } from '../actions/action_types';

export default function(state = null, action) {

  switch (action.type)
  {
  case `${FETCH_BOOKS}_PENDING`:
      return state;

    case `${FETCH_BOOKS}_SUCCESS`:
      const { books, category } = action.payload;
      return books.filter(book => book.category === category.id);

    case `${FETCH_BOOKS}_ERROR`:
      return state;

    default:
      return state;
  }
}
