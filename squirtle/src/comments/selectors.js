import { createSelector } from 'reselect'

export const SellerOfProductSelector = (state, product) => {
  if (product && product.seller && state && state.profiles)
    return state.profiles[product.seller]
}
