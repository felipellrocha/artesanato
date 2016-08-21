import { createSelector } from 'reselect'

export const SingleCommentSelector = (state, id) => (
  state
  && state.comments
  && state.comments[id]
)

export const CommentsOfProductSelector = (state, product) => {
  if (product && product.comments && state && state.comments)
    return product.comments.map((comment) => state.comments[comment])
}
