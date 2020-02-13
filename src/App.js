import React from 'react';
import './App.css';
import ArtSearch from './containers/ArtSearchContainer';

import {createStore} from 'redux';
import { art } from './reducers';
import {actionSearch} from './actions';
import {Provider} from 'react-redux';

const store = createStore(art);
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
