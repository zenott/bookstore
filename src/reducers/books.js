import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK: {
      return state.filter(book => book.id !== action.id);
    }
    default:
      return state;
  }
}
