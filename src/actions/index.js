import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

const generateID = () => Math.round(Math.random() * 1000000);

export const createBook = ({ title, category }) => ({
  type: CREATE_BOOK,
  book: {
    id: generateID(),
    title,
    category,
  },
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});
