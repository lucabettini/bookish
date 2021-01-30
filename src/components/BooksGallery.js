import React from 'react';
import { Container } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';

import BookCover from '../components/BookCover';

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
  const imageRenderer = ({ index, photo }) => (
    <BookCover
      margin={'2px'}
      index={index}
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
