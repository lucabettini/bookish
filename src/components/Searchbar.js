import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import booksContext from '../context/booksContext/booksContext';
import { fetchBooks } from '../context/booksContext/actions';
import { GET_BOOKS, SET_STATUS } from '../context/types';

import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

const Searchbar = () => {
  const [text, setText] = useState('');
  const [query, setQuery] = useState(null);
  const { dispatch } = useContext(booksContext);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      // Redirect user to /books route (Header + ResultsScreen components)
      history.push('/books');
      dispatch({ type: SET_STATUS, payload: { status: 'loading' } });
      try {
        const res = await fetchBooks(query);
        dispatch({ type: GET_BOOKS, payload: { books: res } });
        dispatch({ type: SET_STATUS, payload: { status: 'succeeded' } });
      } catch (err) {
        dispatch({ type: SET_STATUS, payload: { status: 'failed' } });
        dispatch({ type: GET_BOOKS, payload: { books: [] } });
        localStorage.clear();
      }
    }
    if (typeof query === 'string') {
      fetchData();
    }
    // We can include the dispatch function in the dependecy array since it
    // remains constant by default
  }, [query, dispatch, history]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      setQuery(text);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <InputGroup>
          <FormControl
            type='text'
            placeholder='Search'
            aria-label='Search books'
            onChange={onChange}
          />
          <InputGroup.Append>
            <Button variant='dark' type='Submit'>
              <i className='fas fa-search'></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Searchbar;
