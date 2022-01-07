import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import BookList from './views/Books/BookList';
// import Home from './views/Home';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <header>Library Catalog</header>
        <Switch>
          <Route exact path="/">
            <h2>Welcome to Dangalf&apos;s Library of Computer Science</h2>
            <p>
              Check out the amazing selection of books in our <NavLink to="/books">catalog</NavLink>
              .
            </p>
          </Route>
          <Route exact path="/books" component={BookList} />
          {/* <BookList />
          </Route> */}
          <Route exact path="/books/:id"></Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
