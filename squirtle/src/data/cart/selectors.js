import { createSelector } from 'reselect'

export const isProductInCart = (state, id) => (
  state
  && state.cart
  && state.cart.products
  && state.cart.products[id]
)

export const getProductsInCart = (state) => {
  const products = Object.keys(state.cart.products)

  return products.map(product => state.products[product])
}
