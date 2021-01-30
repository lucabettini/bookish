import React, { useContext } from 'react';

import booksContext from '../context/booksContext/booksContext';

import Loader from '../components/Loader';
import BooksGallery from '../components/BooksGallery';
import ErrorScreen from './ErrorScreen';

// The 'status' value from the global state tracks the status of the API request.
// When the page is opened for the first time or is refreshed, the 'status'
// state value is 'init' by default. This component first checks if there
// is anything saved in localStorage. If not, it shows the Loader component
// while the request is pending.

const ResultScreen = () => {
  const { books, status } = useContext(booksContext);

  if (status === 'init') {
    const savedBooksJSON = localStorage.getItem('books');
    if (savedBooksJSON) {
      const savedBooks = JSON.parse(savedBooksJSON);
      return <BooksGallery books={savedBooks} />;
    } else {
      return <Loader />;
    }
  } else if (status === 'loading') {
    return <Loader />;
  } else if (status === 'succeeded') {
    return <BooksGallery books={books} />;
  } else if (status === 'failed') {
    return <ErrorScreen />;
  }
};

export default ResultScreen;
