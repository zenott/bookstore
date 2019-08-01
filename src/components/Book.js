import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/categories';

const Book = ({ book: { id, title, category } }) => {
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.oneOf(CATEGORIES).isRequired,
  }).isRequired,
};

export default Book;
