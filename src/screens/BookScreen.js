import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import booksContext from '../context/booksContext/booksContext';

import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Cover = styled.img`
  width: 100%;
`;

const P = styled.p`
  margin-bottom: 0;
`;

const Title = styled.p`
  font-family: 'Bree Serif', serif;
  margin-bottom: 0;
  font-size: 1.5em;
`;

const Subtitle = styled.p`
  font-family: 'Bree Serif', serif;
  margin-bottom: 0;
  font-size: 1.2em;
`;

const Infos = styled.div`
  padding-top: 1em;
`;

const Description = styled.p`
  padding-top: 2em;
  text-align: justify;
`;

const BookScreen = () => {
  const id = useParams().id;
  const { books } = useContext(booksContext);
  const bookFromState = books.filter((book) => book.id === id)[0];

  const getBook = () => {
    if (!bookFromState) {
      const savedBooksJSON = localStorage.getItem('books');
      const savedBooks = JSON.parse(savedBooksJSON);

      return savedBooks.filter((book) => book.id === id)[0];
    } else {
      return bookFromState;
    }
  };

  const {
    title,
    author,
    cover,
    description,
    language,
    pages,
    publishedDate,
    publisher,
    subtitle,
  } = getBook(id);

  const getYearOfPublication = (dateString) => {
    return dateString.slice(0, 4);
  };

  return (
    <Container className='background-white main-content fill'>
      <Row>
        <Col
          xs={6}
          sm={4}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Cover src={cover} alt='Book cover' />
        </Col>
        <Col xs={6} sm={8}>
          <Title>{title.toUpperCase()}</Title>
          {subtitle !== 'N/A' ? <Subtitle>{subtitle}</Subtitle> : null}
          {author !== 'N/A' ? <Subtitle>{author}</Subtitle> : null}
          <Infos>
            {pages !== 'N/A' ? <P>Pages: {pages}</P> : null}
            {publisher !== 'N/A' || publishedDate !== 'N/A' ? (
              <P>
                Published{publisher !== 'N/A' ? ` by ${publisher}` : null}
                {publishedDate !== 'N/A'
                  ? ` in ${getYearOfPublication(publishedDate)}`
                  : null}{' '}
              </P>
            ) : null}
            {language !== 'N/A' ? <P>Language: {language}</P> : null}
          </Infos>
        </Col>
      </Row>
      {description !== 'N/A' ? (
        <Row>
          <Col>
            <Description>{description}</Description>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default BookScreen;
