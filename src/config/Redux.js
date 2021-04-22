import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import reducers from '@data/Reducers';
import history from './routes/History';

const composeEnhancers = (process.env.APP_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const middlewares = [
  thunk,
  routerMiddleware(history),
];

export const store = createStore(
  reducers(history),
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
