import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import BookList from './views/Books/BookList';
import Home from './views/Home';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="main-link">
            Home
          </NavLink>
          <NavLink to="/books" data-testid="books-link">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books">
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
