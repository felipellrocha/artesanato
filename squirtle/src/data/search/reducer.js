import { handleActions } from 'redux-actions'

import {
  RECEIVE_AGGREGATIONS,
} from 'actions/search'

const initialState = {};

export default handleActions({
  RECEIVE_AGGREGATIONS: (state, action) => {
    const { term } = action.data.entities

    return Object.assign({}, state, term)
  },
}, initialState);
