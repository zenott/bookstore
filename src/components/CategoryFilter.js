import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/categories';

const CategoryFilter = ({ filter, changeFilter }) => {
  return (
    <select value={filter} onChange={changeFilter}>
      {['All', ...CATEGORIES].map(cat => (
        <option value={cat} key={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
