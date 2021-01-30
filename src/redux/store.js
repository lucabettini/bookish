import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../redux/booksSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
