import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from './Book';
import CategoryFilter from './CategoryFilter';
import CATEGORIES from '../constants/categories';

const BookList = ({ books, removeBook, currFilter, changeFilter }) => {
  return (
    <>
      <CategoryFilter currFilter={currFilter} changeFilter={changeFilter} />
      <table>
        <tbody>
          {books.map(book => (
            <Book key={book.id} book={book} removeBook={removeBook} />
          ))}
        </tbody>
      </table>
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.oneOf(CATEGORIES).isRequired,
    })
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  currFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  currFilter: state.filter,
});

export default connect(
  mapStateToProps,
  { removeBook, changeFilter }
)(BookList);
