import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose
} from 'redux';
import { productsReducer, activeProductReducer, cartReducer } from './reducers';
import thunk from 'redux-thunk';

/**
 * our applications store
 */

// combine reducers
const rootReducer = combineReducers({
  products: productsReducer,
  activeProduct: activeProductReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating store
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
