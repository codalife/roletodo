import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navigation from './Navigation';
import Home from './Home';
import Edit from './Edit';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Navigation />
        <div>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/protected/edit" component={Edit} />
            <Route path="/protected/create" component={Edit} />
          </div>
        </div>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
