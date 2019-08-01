import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: [...state.books, action.payload.book] };
    case REMOVE_BOOK: {
      const newBooks = state.books.filter(b => b.id !== action.payload.id);
      return { ...state, books: newBooks };
    }
    default:
      return state;
  }
}
