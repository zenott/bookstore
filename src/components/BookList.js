import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../redux/actions';
import Book from './Book';
import CategoryFilter from './CategoryFilter';
import CATEGORIES from '../constants/categories';
import styles from './BookList.module.css';

const BookList = ({  books,removeBook, filter, changeFilter}) => (
  <>
    <CategoryFilter filter={filter} changeFilter={changeFilter} />
    <div className={styles['books-container']}>
      {books.map(book => (
        <Book book={book} removeBook={removeBook} />
      ))}
    </div>
  </>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.oneOf(CATEGORIES).isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books, filter }) => {
  const categoryFilter = b => filter === 'All' || filter === b.category;
  return {
    books: books.filter(categoryFilter),
    filter,
  };
};

export default connect(
  mapStateToProps,
  { removeBook, changeFilter },
)(BookList);
