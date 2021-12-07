# [BOOKISH](https://bookish.lucabettini.com)

<i>Completed and deployed on Netlify on January 31, 2021 - new deploy on private server with minor revision on October 4, 2021</i>

This website was created as a personal project while following the [Start2Impact](https://www.start2impact.it/) React & Redux course.

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

This branch uses React built-in Context API as global state-manager. The main branch, used in production, uses Redux (configured with redux-toolkit).

I used the [Google Books API](https://developers.google.com/books/) to get book's data, using the query provided by the user, and [react-photo-gallery](https://www.npmjs.com/package/react-photo-gallery) to make the gallery.

The fetched data are saved both on the global state and on localStorage. This way, if the user refreshes the page, the website doesn't break. For additional infos see the [ResultsScreen](https://github.com/lucabettini/bookish/blob/main/src/screens/ResultScreen.js) file.

The useHistory hook (instead of Redirect from react-router-dom) was used to redirect between different screens, allowing an efficient use of the browser back button. This was not possible using Redirect, that is equivalent to the .replace method (and not .push) of useHistory.

## Layout

To make the website more appealing, only the cover is shown in the gallery. Title and author of the books appear on hover. This reflects the intended audience for this website (primarily desktop).

However, the website is fully responsive and the covers on mobile and table layout are sufficiently big to permit the user to read the title and author's name on the cover.

The layout was made using [React Bootstrap](https://react-bootstrap.github.io/), [styled-components](https://styled-components.com/) and Sass over a [Bootswatch theme](https://bootswatch.com/sandstone/).

The website icon is by [Nick Roach](https://www.iconfinder.com/icons/1055107/bookshelf_books_library_icon), the other icons are from [Font Awesome](https://fontawesome.com/). The background is a photo by [Patrick Tomasso](https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/books?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

---

Made by [Luca Bettini](https://lucabettini.github.io/).
