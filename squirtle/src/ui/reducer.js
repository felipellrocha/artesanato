import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/page'

const initialState = {
  productList: [],
};

export default function artwork(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_HOME_PAGE:
      console.log(action.products.result);
      return {
        productList: action.products.result,
      };
  }
  return state;
}
