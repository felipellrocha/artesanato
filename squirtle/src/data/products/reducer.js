import { handleActions } from 'redux-actions'

import {
  RECEIVE_COMMENT,
} from 'actions/comment'

import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

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
