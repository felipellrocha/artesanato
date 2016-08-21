import { createSelector } from 'reselect'

export const SingleArtworkSelector = (state, id) => (
  state
  && state.artworks
  && state.artworks[id]
)
