export const HomeLink = () => `/`
export const LoginLink = () => `/login`
export const SearchLink = ({ filter } = {}) => {
  return filter ? `/search?filter=${filter}` : `/search`
}
export const CartReviewLink = () => `/cart-review`
export const ProductLink = (id) => `product/${id}`
