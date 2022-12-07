import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose
} from 'redux';
import { productsReducer, activeProductReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  productsState: productsReducer,
  activeProduct: activeProductReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
