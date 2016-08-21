import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

const initialState = {
};

export default function artwork(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SINGLE_PRODUCT:
      const {
        artwork,
      } = action.product.entities

      return Object.assign({}, artwork)
    case RECEIVE_HOME_PAGE:
      return action.products;
  }
  return state;
}
