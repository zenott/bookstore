import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/categories';

const CategoryFilter = ({ currFilter, changeFilter }) => {
  return (
    <select value={currFilter} onChange={changeFilter}>
      {['All', ...CATEGORIES].map(cat => (
        <option value={cat} key={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  currFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
