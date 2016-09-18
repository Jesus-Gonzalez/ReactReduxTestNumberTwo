import { FETCH_BOOKS, SELECT_BOOK } from '../actions/action_types';

export default function(state = null, action) {

  switch (action.type)
  {
    case `${FETCH_BOOKS}_SUCCESS`:
      return action.payload.category.id;

    default:
      return state;
  }
}
