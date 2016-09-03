import { handleActions } from 'redux-actions'

import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

import {
  RECEIVE_COMMENT,
} from 'actions/comment'

const initialState = {
};

export default handleActions({
  RECEIVE_SINGLE_PRODUCT: (state, action) => {
    const { comment } = action.product.entities

    return Object.assign({}, comment)
  },
  RECEIVE_COMMENT: (state, action) => {
    const { comment } = action.data.entities

    return Object.assign({}, state, comment)
  }
}, initialState);
