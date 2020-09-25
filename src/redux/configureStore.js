import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  // mount rootReducer & middleware to store
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  // run sageMiddleware
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
