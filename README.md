# [BOOKISH](https://book-ish.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6d29760-ca0f-4a8a-8472-16dd54062a2c/deploy-status)](https://app.netlify.com/sites/book-ish/deploys)

This website was created as a personal project while following the [Start2Impact](https://www.start2impact.it/) development course.  
The requirements were:

- A searchbar to provide the query
- Every book must show at least title, author and cover.
- A dedicated page for every book with additional infos, created using React Router
- Intuitive and simple UI/UX
- Sensible folder structure
- Responsive design
  <br>

## Internal logic

This website is built entirely using the latest version React (17.0.1), with functional components and React Hooks instead of class component (a part from the Error Boundary component, that doesn't have an alternative with hooks).

The main branch, used in production, uses Redux as a state manager (configured with redux-toolkit). An additional branch uses React built-in Context API as an alternative to Redux.

I used the [Google Books API](https://developers.google.com/books/) to get book's data, using the query provided by the user, and [react-photo-gallery](https://www.npmjs.com/package/react-photo-gallery) to make the gallery.

I used HashRouter over BrowserRouter since there is no server-side; this allows the user to refresh the page (otherwise a 404 would be displayed if the user isn't in the homepage). Adding this refresh functionality needed another step: saving the fetched data on localStorage as well as on the global state, that is resetted in its initialState conditions after every refresh. For additional infos see the [ResultsScreen](https://github.com/lucabettini/bookish/blob/main/src/screens/ResultScreen.js) file.

The useHistory hook (instead of Redirect from react-router-dom) was used to redirect between different screens, allowing an efficient use of the browser back button. This was not possible using Redirect, that is equivalent to the .replace method (and not .push) of useHistory.

## Layout

To make the website more appealing, only the cover is shown in the gallery. Title and author of the books appear on hover. This reflects the intended audience for this website (primarily desktop).

However, the website is fully responsive and the covers on mobile and table layout are sufficiently big to permit the user to read the title and author's name on the cover.

The layout was made using [React Bootstrap](https://react-bootstrap.github.io/), [styled-components](https://styled-components.com/) and Sass over a [Bootswatch theme](https://bootswatch.com/sandstone/).

The website icon is by [Nick Roach](https://www.iconfinder.com/icons/1055107/bookshelf_books_library_icon), the other icons are from [Font Awesome](https://fontawesome.com/). The background is a photo by [Patrick Tomasso](https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/books?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

---

Made by [Luca Bettini](https://lucabettini.github.io/).
