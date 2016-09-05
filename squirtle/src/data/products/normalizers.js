import { normalize, Schema, arrayOf } from 'normalizr'
import ProfileNormalizer from 'data/profiles/normalizers'
import CommentNormalizer from 'data/comments/normalizers'

const Normalizer = new Schema('product', { idAttribute: 'id' });

Normalizer.define({
  comments: arrayOf(CommentNormalizer),
  seller: ProfileNormalizer
})

export default Normalizer;
