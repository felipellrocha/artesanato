import { handleActions } from 'redux-actions'

import {
  RECEIVE_AUTH_TOKEN,
} from 'actions/page'

import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

const initialState = {
};

export default handleActions({
  RECEIVE_SINGLE_PRODUCT: (state, action) => {
    const { profile } = action.product.entities

    return Object.assign({}, profile)
  },
  RECEIVE_AUTH_TOKEN: (state, action) => {
    const { profile } = action.profile.entities

    return Object.assign({}, profile)
  }
}, initialState);
