import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';

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
          <Route exact path="/books/:id" component={BookDetail} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
