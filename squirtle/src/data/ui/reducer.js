import { handleActions } from 'redux-actions'

import {
  RECEIVE_HOME_PAGE,
} from 'actions/page'

import {
  TOGGLE_ACCOUNT_DROPDOWN,
} from 'actions/ui'

const initialState = {
  productList: [],
  dropdowns: {
    account: false, 
  }
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
  }
}, initialState);
