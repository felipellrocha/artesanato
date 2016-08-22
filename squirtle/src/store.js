import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import artworks from 'data/products/reducer'
import profiles from 'data/profiles/reducer'
import comments from 'data/comments/reducer'
import ui from 'data/ui/reducer'

const reducers = combineReducers({
  artworks,
  profiles,
  comments,
  ui,
});

let store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk)
);

export default store;
