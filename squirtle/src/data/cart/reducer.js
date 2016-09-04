import { handleActions } from 'redux-actions'

import { ADD_TO_CART } from 'actions/cart'

const initialState = JSON.parse(localStorage.getItem('cache_cart')) || {};

export default handleActions({
  ADD_TO_CART: (state, action) => {
    const {
      productId,
    } = action;

    if (state[productId]) return Object.assign({}, state, { [productId]: state[productId] + 1 })
    else return Object.assign({}, state, { [productId]: 1 })
  }
}, initialState);
