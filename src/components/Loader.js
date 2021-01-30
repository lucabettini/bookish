import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import spinner from '../img/spinner.svg';

const Spinner = styled.img`
  width: 15vh;
  margin: 30vh auto 0 auto;
  display: block;
`;

const Loader = () => {
  return (
    <Container className='main-content background-white fill'>
      <Spinner src={spinner} alt='loading' />
    </Container>
  );
};

export default Loader;
