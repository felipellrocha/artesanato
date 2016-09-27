import querystring from 'querystring'

export const HomeLink = () => `/`
export const LoginLink = () => `/login`
export const SearchLink = ({ filter } = {}) => {
  const query = filter ?
    '?' + querystring.stringify({
      filter,
    }) :
    ''
  return `/search${query}`
}
export const CartReviewLink = () => `/cart-review`
export const ProductLink = (id) => `product/${id}`
