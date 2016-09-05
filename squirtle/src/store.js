import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import { CacheCart } from 'middlewares/cache'

import products from 'data/products/reducer'
import profiles from 'data/profiles/reducer'
import comments from 'data/comments/reducer'
import cart from 'data/cart/reducer'
import ui from 'data/ui/reducer'
import authentication from 'data/authentication/reducer'

const reducers = combineReducers({
  products,
  profiles,
  comments,
  ui,
  authentication,
  cart,
});

let store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(
    thunk,
    CacheCart,
  ),
);

export default store;
