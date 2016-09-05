import { handleActions } from 'redux-actions'

import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

const initialState = {
  userId: localStorage.getItem('userId'),
};

export default handleActions({
  RECEIVE_AUTH_TOKEN: (state, action) => {
    const profileId = action.data.result

    return Object.assign({}, {
      userId: profileId
    })
  }
}, initialState);
