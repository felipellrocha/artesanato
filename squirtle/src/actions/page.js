import axios from 'axios'
import { getAll, getSingle } from 'products/queries'

import ArtworkNormalizer from 'products/normalizers'
import { normalize, arrayOf } from 'normalizr'

export const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT'
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT'

export const LOAD_HOME_PAGE = 'LOAD_HOME_PAGE'
export const RECEIVE_HOME_PAGE = 'RECEIVE_HOME_PAGE'

export function loadSingleProduct(id) {
  return dispatch => {
    axios.get('/data', {
      params: {
        query: getSingle(id),
      }
    }).then((response) => {
      const data = normalize(response.data.data.product, ArtworkNormalizer);
			dispatch(receiveSingleProduct(data));
    });
  }
}

export function receiveSingleProduct(product) {
  return {
    type: RECEIVE_SINGLE_PRODUCT,
    product
  }
}

export function loadHomePage() {
  return dispatch => {
    axios.get('/data', {
      params: {
        query: getAll(),
      }
    }).then((response) => {
			const data = normalize(response.data.data.products, arrayOf(ArtworkNormalizer));
			dispatch(receiveHomePage(data));
    });
  }
}

export function receiveHomePage(products) {
  return {
    type: RECEIVE_HOME_PAGE,
    products
  }
}
