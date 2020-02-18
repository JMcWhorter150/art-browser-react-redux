import React from 'react';
import './App.css';
import ArtSearch from './containers/ArtSearchContainer';
import ArtList from './containers/ArtListContainer';
import ArtDisplay from './containers/ArtDisplayContainer';

import Nav from './components/Nav';

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import FavoriteList from './containers/FavoriteListContainer';

// Redux middleware is a function that runs between an action being dispatched and an action being received by the reducer
// Middleware manipulates actions before they get to the reducer

const store = createStore(reducers, applyMiddleware(ReduxThunk));
// redux-thunk lets you write actions that return FUNCTIONS instead of objects.
// You can write multi-step dispatches.

window.store = store;

function App() {
  return (
    <Router>
    <div className="App App-header">
      <Nav />
      <Provider store={store}>
        <Switch>
          <Route path="/search" >
            <ArtSearch />
            <ArtList />
          </Route>
          <Route path="/favorite">
            <FavoriteList />
          </Route>
          <Route path='/art'>
            <ArtDisplay />
          </Route>
          <Route exact path="/">
            <h1>Hello! Click on search to find new art or favorites to show saved art.</h1>
          </Route>
        </Switch>
      </Provider>
    </div>
    </Router>
  );
}

export default App;
