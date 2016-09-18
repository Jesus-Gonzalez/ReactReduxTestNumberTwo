import { FETCH_BOOKS, SELECT_BOOK } from '../actions/action_types';

export default function(state = null, action) {

  switch (action.type)
  {
    case `${FETCH_BOOKS}_PENDING`:
      return null;

    case SELECT_BOOK:
      return action.payload;

    default:
      return state;
  }
}
