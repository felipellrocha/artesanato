import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import artworks from 'products/reducer'
import profiles from 'profiles/reducer'
import comments from 'comments/reducer'
import ui from 'ui/reducer'

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
