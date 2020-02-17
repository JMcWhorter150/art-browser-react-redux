import React from 'react';
import './App.css';
import ArtSearch from './containers/ArtSearchContainer';
import ArtList from './containers/ArtListContainer';
import ArtDisplay from './containers/ArtDisplayContainer';

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import FavoriteList from './containers/FavoriteListContainer';

// Redux middleware is a function that runs between an action being dispatched and an action being received by the reducer
// Middleware manipulates actions before they get to the reducer

const store = createStore(reducers, applyMiddleware(ReduxThunk));
// redux-thunk lets you write actions that return FUNCTIONS instead of objects.
// You can write multi-step dispatches.

window.store = store;

function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>
        <FavoriteList />
        <ArtSearch />
        <ArtList />
        <ArtDisplay />
      </Provider>
    </div>
  );
}

export default App;
