import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

export default function configureStore(history, initialState = {}) {
  const middlewares = [routerMiddleware(history), thunk];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      stateTransformer: (state) => state,
      collapsed: true,
      diff: true });
    middlewares.push(logger);
  }

  return createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),

  );
}
