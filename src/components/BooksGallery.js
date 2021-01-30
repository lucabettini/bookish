import React from 'react';
import Gallery from 'react-photo-gallery';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';

import BookCover from '../components/BookCover';

// react-photo-gallery needs an array of photo objects, each with its own source,
// width and height. Here we create that array, passing the source of a black cover
// if the original cover does not exists. This array is passed as a prop to the
// <Gallery /> component below

const createPhotos = (books) => {
  return books.map((book) => {
    return {
      src:
        book.cover !== 'N/A'
          ? book.cover
          : 'https://books.google.com/books/content?id=ACENtUObysoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      width: 1,
      height: 1.5,
    };
  });
};

const BooksGallery = ({ books }) => {
  // We can change how each image looks like in the gallery by passing our own
  // custom component in this function. In this case we give the component a
  // margin and a book prop, with data on that particular book.
  const imageRenderer = ({ index, photo }) => (
    <BookCover
      photo={photo}
      book={books.filter((elem, elemIndex) => elemIndex === index)[0]}
      key={index}
    />
  );

  return (
    <div>
      <Container className='main-content background-white fill'>
        <Gallery photos={createPhotos(books)} renderImage={imageRenderer} />
      </Container>
    </div>
  );
};

export default BooksGallery;

BooksGallery.propTypes = {
  books: PropTypes.array.isRequired,
};
