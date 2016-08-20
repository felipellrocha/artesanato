import { normalize, arrayOf } from 'normalizr'
import ArtworkNormalizer from 'normalizers/artwork'

import {
  RECEIVE_HOME_PAGE,
  RECEIVE_SINGLE_PRODUCT,
} from 'actions/products'

const initialState = {
  result: [],
  entities: [],
};

export default function artwork(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SINGLE_PRODUCT:
      return normalize(action.product, ArtworkNormalizer);
    break;
    case RECEIVE_HOME_PAGE:
      return normalize(action.products, arrayOf(ArtworkNormalizer));
    break;
  }
  return state;
}
