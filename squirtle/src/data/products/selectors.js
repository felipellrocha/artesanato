import { createSelector } from 'reselect'

export const SingleProductSelector = (state, id) => (
  state
  && state.products
  && state.products[id]
)
