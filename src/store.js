import { createStore, combineReducers } from 'redux'

import artwork from 'reducers/artwork'

const reducers = combineReducers({
  artwork,
});

let store = createStore(reducers);

export default store;
