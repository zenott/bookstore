import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/categories';
import styles from './Book.module.css';

const Book = ({ book: { id, title, category }, removeBook }) => {
  return (
    <div className={styles.book}>
      <div className={styles.left}>
        <div className={styles.category}>{category}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.id}>{id}</div>
        <button
          type="button"
          className={styles.remove}
          onClick={() => removeBook(id)}
        >
          Remove
        </button>
      </div>
      <Middle />
      <Right />
    </div>
  );
};

const Middle = () => {
  return (
    <div className={styles.middle}>
      <div className={styles.progress} />
      <div className={styles['percent-container']}>
        <div className={styles.percent}>64 %</div>
        <div className={styles.completed}>Completed</div>
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className={styles.right}>
      <div className={styles['current-chapter']}>Current chapter</div>
      <div className={styles.chapter}>Chapter 17</div>
      <div className={styles['update-progress']}>Update progress</div>
    </div>
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
