import { ADD_TO_CART } from 'actions/cart'

export const CacheCart = store => next => action => {
  const result = next(action)

  if (action.type !== ADD_TO_CART) return result;

  const state = store.getState().cart;
  localStorage.setItem(`cache_cart`, JSON.stringify(state));

  return result;
}
