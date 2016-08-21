import { normalize, Schema, arrayOf } from 'normalizr'

import ProfileNormalizer from 'profiles/normalizers'

const Comment = new Schema('comment', { idAttribute: 'id' });

Comment.define({
  user: ProfileNormalizer,
})


export default Comment;
