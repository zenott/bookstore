import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';
import CATEGORIES from '../constants/categories';

const BookList = ({ books }) => {
  return (
    <table>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
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
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BookList);
