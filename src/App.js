import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import BookScreen from './screens/BookScreen';
import ErrorScreen from './screens/ErrorScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <ErrorBoundary>
      <div className='full-page background-img'>
        <Router>
          <Switch>
            <Route path='/' exact>
              <HomeScreen />
            </Route>
            <Route path='/books' exact>
              <Header />
              <ResultScreen />
            </Route>
            <Route path='/books/:id' exact>
              <Header />
              <BookScreen />
            </Route>
            <Route path='/error' exact>
              <ErrorScreen />
            </Route>
            <Route path='/about' exact>
              <AboutScreen />
            </Route>
          </Switch>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
