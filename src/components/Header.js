import React from 'react';
import { header, title, books, cat } from './Header.module.css';

const Header = () => {
  return (
    <div className={header}>
      <div className={title}>Bookstore CMS</div>
      <div className={books}>Books</div>
      <div className={cat}>Categories</div>
    </div>
  );
};

export default Header;
