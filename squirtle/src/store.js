import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import artworks from 'products/reducer'
import profiles from 'profiles/reducer'
import ui from 'ui/reducer'

const reducers = combineReducers({
  artworks,
  profiles,
  ui,
});

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
