import { normalize, Schema, arrayOf } from 'normalizr'

import ProfileNormalizer from 'data/profiles/normalizers'

const Comment = new Schema('comment', { idAttribute: 'id' });

Comment.define({
  user: ProfileNormalizer,
})


export default Comment;
