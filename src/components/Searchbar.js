import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/booksSlice';

import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

const Searchbar = () => {
  const [text, setText] = useState('');
  const [query, setQuery] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (query) {
      // Redirect user to /books route (Header + ResultsScreen components)
      history.push('/books');
      // Dispatch async action to fetch data
      dispatch(fetchBooks(query));
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
