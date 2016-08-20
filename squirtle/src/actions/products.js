import axios from 'axios'
import { getAll, getSingle } from 'queries/products'

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
			dispatch(receiveSingleProduct(response.data.data.product));
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
			console.log(response);
			dispatch(receiveHomePage(response.data.data.products));
    });
  }
}

export function receiveHomePage(products) {
  return {
    type: RECEIVE_HOME_PAGE,
    products
  }
}
