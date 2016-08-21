import { normalize, Schema, arrayOf } from 'normalizr'
import ProfileNormalizer from 'profiles/normalizers'
import CommentNormalizer from 'comments/normalizers'

const Artwork = new Schema('artwork', { idAttribute: 'id' });

Artwork.define({
  comments: arrayOf(CommentNormalizer),
  seller: ProfileNormalizer
})

export default Artwork;
