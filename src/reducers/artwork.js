import { normalize, arrayOf } from 'normalizr'
import ArtworkNormalizer from 'normalizers/artwork'

const initialState = [
  {
    id: '82598577-fef1-49af-b0b6-de3b2934519c',
    title: 'Vasos simples',
    screenshot: require('images/vases.jpg'),
    price: {
      value: 2.99,
      currency: 'USD',
    },
  },
  {
    id: 'bfa60128-59aa-437b-a1ce-0876ce73bc7e',
    title: 'Vasos de areia',
    screenshot: require('images/areias.jpg'),
    price: {
      value: 2.99,
      currency: 'USD',
    },
  },
];

export default function artwork(state = initialState, action) {
  return normalize(state, arrayOf(ArtworkNormalizer))
}
