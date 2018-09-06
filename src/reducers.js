import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from './store';

export default function createReducer(asyncReducers) {
  return combineReducers({
    ...asyncReducers
  });
}

export function registerReducer(store, name, reducer) {
  store.asyncReducers[name] = reducer;
  store.replaceReducer(
    connectRouter(history)(createReducer(store.asyncReducers))
  );
}
