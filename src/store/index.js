import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';

// Creating the redux store
export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}
