import { createSelector } from 'reselect'

export const UserOfCommentSelector = (state, comment) => {
  if (comment && comment.user && state && state.profiles)
    return state.profiles[comment.user]
}

export const SellerOfProductSelector = (state, product) => {
  if (product && product.seller && state && state.profiles)
    return state.profiles[product.seller]
}
