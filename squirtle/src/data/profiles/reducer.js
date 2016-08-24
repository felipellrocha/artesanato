import { handleActions } from 'redux-actions'

import {
  RECEIVE_AUTH_TOKEN,
} from 'actions/page'

import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

import { normalize, arrayOf } from 'normalizr'
import ProfileNormalizer from 'data/profiles/normalizers'

const user = JSON.parse(localStorage.getItem('user') || null);

console.log(user);

const initialState = (function () {
  if (user) {
    const normal = normalize(user, ProfileNormalizer);
    return normal.entities.profile;
  }

  return {};
})();

export default handleActions({
  RECEIVE_SINGLE_PRODUCT: (state, action) => {
    const { profile } = action.product.entities

    return Object.assign({}, state, profile)
  },
  RECEIVE_AUTH_TOKEN: (state, action) => {
    const { profile } = action.profile.entities

    return Object.assign({}, state, profile)
  }
}, initialState);
