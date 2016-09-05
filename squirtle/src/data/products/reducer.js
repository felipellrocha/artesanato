import { handleActions } from 'redux-actions'

import {
  RECEIVE_COMMENT,
} from 'actions/comment'

import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
  RECEIVE_PRODUCTS,
} from 'actions/page'

const initialState = {
};

export default handleActions({
  RECEIVE_PRODUCTS: (state, action) => {
    const {
      product,
    } = action.data.entities;

    return Object.assign({}, state, product)
  },
  RECEIVE_SINGLE_PRODUCT: (state, action) => {
    const {
      product,
    } = action.data.entities

    return Object.assign({}, state, product)
  },
  RECEIVE_HOME_PAGE: (state, action) => {
    const {
      product,
    } = action.data.entities;

    return Object.assign({}, state, product)
  },
  RECEIVE_COMMENT: (state, action) => {
    const {
      result: newCommentId,
    } = action.data;

    const {
      id: productId,
    } = action.data.entities.comment[newCommentId].product;

    const product = Object.assign({}, state[productId]);
    product.comments.push(newCommentId);

    return Object.assign({}, state, { productId: product });
  },
}, initialState);
