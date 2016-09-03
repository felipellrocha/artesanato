import { handleActions } from 'redux-actions'

import {
  RECEIVE_COMMENT,
} from 'actions/comment'

import {
  RECEIVE_HOME_PAGE,
} from 'actions/page'

import {
  TOGGLE_ACCOUNT_DROPDOWN,
  TYPE_TEXTAREA,
} from 'actions/ui'

const initialState = {
  productList: [],
  dropdowns: {
    account: false, 
  },
  comment: '',
};

export default handleActions({
  RECEIVE_HOME_PAGE: (state, action) => {
    return Object.assign({}, state, {
      productList: action.products.result,
    });
  },
  TOGGLE_ACCOUNT_DROPDOWN: (state, action) => {
    return Object.assign({}, state, {
      dropdowns: {
        account: !state.dropdowns.account,
      }
    });
  },
  TYPE_TEXTAREA: (state, action) => {
    return Object.assign({}, state, {
      comment: action.text,
    })
  },
  RECEIVE_COMMENT: (state, action) => {
    return Object.assign({}, state, {
      comment: '',
    })
  }
}, initialState);
