import { createSelector } from 'reselect'

export const SingleArtworkSelector = (state, id) => state.entities.artwork[id]
export const ArtworkMapSelector = (state) => state.result
