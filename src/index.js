import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import createLogger from 'redux-logger';
import allReducers from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { routerMiddleware } from 'react-router-redux'
injectTapEventPlugin();

// const logger = createLogger();
const routeMiddle = routerMiddleware(browserHistory)
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, routeMiddle)
);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes }/>
  </Provider>,
  document.getElementById('root')
);
