import { createSelector } from 'reselect'

export const SingleTermSelector = (state, id) => (
  state
  && state.search
  && state.search[id]
)

