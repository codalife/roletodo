import React from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import Login from './Login';
import Protected from './Protected';
import Edit from './Edit';

const App = ({ name }) => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">ToDo</Link>
        </li>
      </ul>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/protected/todo" component={Protected} />
        <Route path="/protected/edit" component={Edit} />
        <Route path="/protected/create" component={Edit} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
