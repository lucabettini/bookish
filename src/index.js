import React from 'react';
import ReactDOM from 'react-dom';

import BooksState from './context/booksContext/BooksState';

import './bootstrap.min.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BooksState>
      <App />
    </BooksState>
  </React.StrictMode>,
  document.getElementById('root')
);
