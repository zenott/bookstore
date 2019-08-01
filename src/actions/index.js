import { CREATE_BOOK } from './actionTypes';

export const createBook = ({ title, category }) => ({
  type: CREATE_BOOK,
  book: {
    id: generateID(),
    title,
    category,
  },
});

const generateID = () => Math.round(Math.random() * 1000000);
