import { createSelector } from 'reselect'

export const SingleArtworkSelector = (state, id) => (
  state
  && state.entities
  && state.entities.artwork
  && state.entities.artwork[id]
)
export const ArtworkMapSelector = (state) => {
  return state.result;
}
