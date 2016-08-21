import { handleActions } from 'redux-actions'

import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

const initialState = {
  productList: [],
};

export default handleActions({
  RECEIVE_HOME_PAGE: (state, action) => {
    return {
      productList: action.products.result,
    };
  },
}, initialState);
