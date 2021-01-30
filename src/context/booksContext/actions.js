import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

// Simple function to parse the response
const bookInstance = (obj) => {
  // Check if author is anonymous
  const checkAuthor = (author) => {
    if (author.charAt(0) === '[') {
      return 'Anonymous';
    }
    return author;
  };

  // _.get(object, path, defaultValue)
  return {
    id: _.get(obj, 'id', uuidv4()),
    title: _.get(obj, 'volumeInfo.title', 'N/A'),
    subtitle: _.get(obj, 'volumeInfo.subtitle', 'N/A'),
    description: _.get(obj, 'volumeInfo.description', 'N/A'),
    author: checkAuthor(_.get(obj, 'volumeInfo.authors[0]', 'N/A')),
    cover: _.get(obj, 'volumeInfo.imageLinks.thumbnail', 'N/A'),
    language: _.get(obj, 'volumeInfo.language', 'N/A'),
    pages: _.get(obj, 'volumeInfo.pageCount', 'N/A'),
    publisher: _.get(obj, 'volumeInfo.publisher', 'N/A'),
    publishedDate: _.get(obj, 'volumeInfo.publishedDate', 'N/A'),
  };
};

export const fetchBooks = async (userInput) => {
  try {
    const api_key = process.env.REACT_APP_API_KEY;
    const query = encodeURIComponent(userInput);

    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&printType=books&key=${api_key}`
    );
    const parsedRes = res.data.items.map((book) => {
      return bookInstance(book);
    });

    // Save the parsed response on localStorage, otherwise all data
    // would be lost if the user refreshes the page
    const json = JSON.stringify(parsedRes);
    localStorage.setItem('books', json);

    return parsedRes;
  } catch (err) {
    throw Error(err);
  }
};
