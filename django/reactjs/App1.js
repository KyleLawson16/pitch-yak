import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import VideoCustomize from './components/video_customize';
import VideoEmailCapture from './components/video_email_capture';
import VideoEmailCaptureEdit from './components/video_email_capture_customize';
import VideoSearch from './components/video_search';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={VideoSearch} />
          <Route exact path="/:id" component={VideoCustomize} />
          <Route exact path="/:id/email-capture" component={VideoEmailCapture} />
          <Route path="/:id/email-capture/edit" component={VideoEmailCaptureEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('App1'));
