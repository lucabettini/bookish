import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// STYLES VARIABLES
const content = {
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
};

const contentOverlay = {
  background: 'rgba(0, 0, 0, 0.7)',
  position: 'absolute',
  height: '99%',
  width: '100%',
  transition: 'all 0.4s ease-in-out 0s',
};

const contentDetails = {
  position: 'absolute',
  textAlign: 'center',
  width: '100%',
  top: '50%',
  left: '50%',
  opacity: '0',
  transform: 'translate(-50%, -50%)',
  transition: 'all 0.3s ease-in-out 0s',
};

const contentDetailsTitle = {
  color: '#fff',
  fontWeight: '700',
  marginBottom: '0.5em',
  fontSize: '1.5em',
};

const BookCover = ({ photo, margin, book }) => {
  const [isSelected, setIsSelected] = useState(false);
  const history = useHistory();

  const { id, title, author } = book;

  const changeTitle = (title) => {
    let titleWordsArray = title.split(' ');
    if (titleWordsArray.length > 5) {
      return `${titleWordsArray.slice(0, 4).join(' ')}...`;
    }
    return title;
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/books/${id}`);
  };

  return (
    <div
      style={{
        margin,
        height: photo.height,
        width: photo.width,
        ...content,
      }}
      onMouseEnter={() => setIsSelected(!isSelected)}
      onMouseLeave={() => setIsSelected(!isSelected)}
      onClick={handleClick}
    >
      <div style={{ ...contentOverlay, opacity: isSelected ? '1' : '0' }}></div>
      <img
        alt={photo.title}
        style={{
          width: '100%',
          border: '1px solid #2a2b28',
        }}
        {...photo}
      />
      <div
        style={{
          ...contentDetails,
          opacity: isSelected ? '1' : '0',
        }}
      >
        <h3 style={{ ...contentDetailsTitle }}>
          {changeTitle(title).toUpperCase()}
        </h3>
        <p style={{ color: '#fff', fontSize: '0.8em' }}>
          {author.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default BookCover;
