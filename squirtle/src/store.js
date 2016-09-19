import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import { ReducerCache } from 'middlewares/cache'

import products from 'data/products/reducer'
import profiles from 'data/profiles/reducer'
import comments from 'data/comments/reducer'
import cart, { handlers } from 'data/cart/reducer'
import ui from 'data/ui/reducer'
import authentication from 'data/authentication/reducer'
import search from 'data/search/reducer'

const reducers = combineReducers({
  products,
  profiles,
  comments,
  ui,
  authentication,
  cart,
  search,
});

let store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(
    thunk,
    ReducerCache('cart', handlers),
  ),
);

export default store;
