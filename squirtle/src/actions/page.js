import { getAll, getSingle } from 'data/products/queries'

import ProductNormalizer from 'data/products/normalizers'
import { normalize, arrayOf } from 'normalizr'

import requests from 'utils/requests'
import axios from 'axios'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT'
export const RECEIVE_HOME_PAGE = 'RECEIVE_HOME_PAGE'

export function loadCartProducts(ids) {
  return dispatch => {
    const requestList = ids.map(id =>
      requests.get('/data', {
        params: {
          query: getSingle(id),
        }
      })
    )

    axios.all(requestList).then((responses) => {
      const products = responses.map(response => response.data.data.product);
      const data = normalize(products, arrayOf(ProductNormalizer));
			dispatch(receiveProducts(data));
    });
  }
}

export function loadSingleProduct(id) {
  return dispatch => {
    requests.get('/data', {
      params: {
        query: getSingle(id),
      }
    }).then((response) => {
      const product = response.data.data.product;
      product.comments = product.comments.edges.map(comment => {
        comment.node.createdAt = new Date(comment.node.createdAt);
        return comment.node;
      });
      const data = normalize(product, ProductNormalizer);
			dispatch(receiveSingleProduct(data));
    });
  }
}

export function loadHomePage() {
  return dispatch => {
    requests.get('/data', {
      params: {
        query: getAll(),
      }
    }).then((response) => {
      const unwrap = response.data.data.products.edges.map(node => node.node);
			const data = normalize(unwrap, arrayOf(ProductNormalizer));
			dispatch(receiveHomePage(data));
    });
  }
}

export function receiveProducts(data) {
  return {
    type: RECEIVE_PRODUCTS,
    data,
  }
}

export function receiveSingleProduct(data) {
  return {
    type: RECEIVE_SINGLE_PRODUCT,
    data,
  }
}

export function receiveHomePage(data) {
  return {
    type: RECEIVE_HOME_PAGE,
    data,
  }
}
