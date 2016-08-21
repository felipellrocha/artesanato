import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

export default function artwork(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SINGLE_PRODUCT:
      const { profile } = action.product.entities

      return Object.assign({}, profile)
    case RECEIVE_HOME_PAGE:
      return action.products;
  }
  return state;
}
