import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import Header from './Header';
import { container } from './App.module.css';

function App() {
  return (
    <div className={container}>
      <Header />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
