import React from 'react';
import './App.css';
import ArtSearch from './containers/ArtSearchContainer';

import {createStore, applyMiddleware} from 'redux';
import { art } from './reducers';
import {actionSearch} from './actions';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

// Redux middleware is a function that runs between an action being dispatched and an action being received by the reducer
// Middleware manipulates actions before they get to the reducer

const store = createStore(art, applyMiddleware(ReduxThunk));
// redux-thunk lets you write actions that return FUNCTIONS instead of objects.
// You can write multi-step dispatches.

store.subscribe(() => {
    console.table(store.getState());
});
store.dispatch(actionSearch('sunflowers'));

function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>
        <ArtSearch />
      </Provider>
    </div>
  );
}

export default App;
