import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './combineReducers';

export const configureStore = (initialState?: IRootState) => {
  const enhancer = compose(
    applyMiddleware(thunk),
  );

  const store = createStore<IRootState, IAction, {}, {}>(rootReducer, initialState, enhancer);
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./combineReducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
