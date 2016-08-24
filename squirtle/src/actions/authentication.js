import axios from 'axios'
import _ from 'lodash'
import { getAll, getSingle } from 'data/products/queries'
import { hashHistory } from 'react-router'

import {
  HomeLink,
} from 'Links'

export const RECEIVE_AUTH_TOKEN = 'RECEIVE_AUTH_TOKEN'

import ProfileNormalizer from 'data/profiles/normalizers'
import { normalize, arrayOf } from 'normalizr'

export function requestAuthToken(auth) {
  return dispatch => {
    axios.post('/session/create', auth).then(response => {
      const {
        token,
        user,
      } = response.data;

      const camelUser = _.mapKeys(user, function (v, k) {return _.camelCase(k);})
			const normalUser = normalize(camelUser, ProfileNormalizer);

      localStorage.setItem('id_token', token)
      localStorage.setItem('user', JSON.stringify(camelUser))
      localStorage.setItem('userId', user.id)

			dispatch(receiveAuthToken(normalUser));
      hashHistory.push(HomeLink())
    });
  }
}

export function receiveAuthToken(profile) {
  return {
    type: RECEIVE_AUTH_TOKEN,
    profile,
  }
}
