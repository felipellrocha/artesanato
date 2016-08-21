import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

import { handleActions } from 'redux-actions'

const initialState = {
};

export default handleActions({
  RECEIVE_SINGLE_PRODUCT: (state, action) => {
    const {
      artwork,
    } = action.product.entities

    return Object.assign({}, artwork)
  },
  RECEIVE_HOME_PAGE: (state, action) => {
    const {
      artwork,
    } = action.products.entities;

    return Object.assign({}, artwork)
  }
}, initialState);
