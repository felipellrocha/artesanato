import { normalize, arrayOf } from 'normalizr'
import ArtworkNormalizer from 'normalizers/artwork'

const initialState = [
];

export default function artwork(state = initialState, action) {
  return normalize(state, arrayOf(ArtworkNormalizer))
}
