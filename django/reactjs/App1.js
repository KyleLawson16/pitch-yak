import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PitchList from './components/pitch_list';
import PitchNew from './components/pitch_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/pitches/new" component={PitchNew} />
          <Route exact path="/pitches" component={PitchList} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('App1'));
