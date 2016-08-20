import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import artwork from 'reducers/artwork'

const reducers = combineReducers({
  artwork,
});

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
