import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/categories';

const Book = ({ book: { id, title, category }, removeBook }) => {
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
      <th>
        <button type="button" onClick={() => removeBook(id)}>
          Remove book
        </button>
      </th>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.oneOf(CATEGORIES).isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
