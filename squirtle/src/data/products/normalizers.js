import { normalize, Schema, arrayOf } from 'normalizr'
import ProfileNormalizer from 'data/profiles/normalizers'
import CommentNormalizer from 'data/comments/normalizers'

const Artwork = new Schema('artwork', { idAttribute: 'id' });

Artwork.define({
  comments: arrayOf(CommentNormalizer),
  seller: ProfileNormalizer
})

export default Artwork;
