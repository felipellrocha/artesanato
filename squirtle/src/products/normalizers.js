import { normalize, Schema, arrayOf } from 'normalizr'
import ProfileNormalizer from 'profiles/normalizers'

const Artwork = new Schema('artwork', { idAttribute: 'id' });

Artwork.define({
  //comments: arrayOf(Comment),
  seller: ProfileNormalizer
})

export default Artwork;
