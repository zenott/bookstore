import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/categories';

const BookForm = props => {
  return (
    <form>
      <input type="text" name="title" />
      <select>
        {CATEGORIES.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

BookForm.propTypes = {};

export default BookForm;
