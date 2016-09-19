export const ADD_TO_CART = 'ADD_TO_CART'
export const DECREASE_FROM_CART = 'DECREASE_FROM_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId
  }
}

export function decreaseFromCart(productId) {
  return {
    type: DECREASE_FROM_CART,
    productId
  }
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId
  }
}
