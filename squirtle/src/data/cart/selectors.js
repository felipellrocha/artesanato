import { createSelector } from 'reselect'

export const isProductInCart = (state, id) => (
  state
  && state.cart
  && state.cart.products
  && state.cart.products[id]
)

export const getProductsInCart = (state) => {
  const cart = Object.keys(state.cart.products)
  const products = Object.keys(state.products)

  return products.length > 0 ?
    cart.map(product => {
      const item = state.products[product]

      item.quantity = state.cart.products[product]

      return item
    }) :
    []
}

export const getTotal = (products) =>
  products && products.length ?
    products.reduce((prev, curr) => (prev + (curr.priceValue * curr.quantity)), 0) :
    0;
