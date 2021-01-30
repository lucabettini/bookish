import { GET_BOOKS, SET_STATUS } from '../types';

const booksReducer = (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload.books,
        loading: false,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      throw Error(`Unhandled action: ${action.type}`);
  }
};

export default booksReducer;
