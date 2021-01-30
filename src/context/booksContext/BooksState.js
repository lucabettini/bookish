import React, { useReducer } from 'react';
import BooksContext from './booksContext';
import booksReducer from './booksReducer';

const BookState = (props) => {
  const initialState = {
    books: [],
    status: 'init',
  };
  const [state, dispatch] = useReducer(booksReducer, initialState);

  return (
    <BooksContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BookState;
