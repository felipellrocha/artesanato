import { handleActions } from 'redux-actions'

import {
  ADD_TO_CART,
  REDUCE_FROM_CART,
} from 'actions/cart'

const cache = localStorage.getItem('cache_cart');
const initialState = cache ?
  JSON.parse(cache) :
  {
    products: {},
    total: 0,
  };

export const handlers = {
  DECREASE_FROM_CART: (state, action) => {
    const {
      productId,
    } = action;

    const product = state.products[productId];

    if (!product) return state;

    const newProducts = Object.assign({}, state.products, {
      [productId]: product - 1,
    })

    return Object.assign({}, state, {
      products: newProducts,
      total: state.total - 1,
    })
  },
  ADD_TO_CART: (state, action) => {
    const {
      productId,
    } = action;

    const product = state.products[productId];

    if (product) {
      const newProducts = Object.assign({}, state.products, {
        [productId]: product + 1,
      })

      return Object.assign({}, state, {
        products: newProducts,
        total: state.total + 1,
      })
    }
    else {
      const newProducts = Object.assign({}, state.products, {
        [productId]: 1,
      })

      return Object.assign({}, state, {
        products: newProducts,
        total: state.total + 1,
      })
    }
  }
}

export default handleActions(handlers, initialState);
