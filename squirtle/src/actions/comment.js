import { sendComment } from 'data/products/queries'

import requests from 'utils/requests'
import querystring from 'querystring'

import CommentNormalizer from 'data/comments/normalizers'
import { normalize } from 'normalizr'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

export function submitComment(text, user_id, product_id) {
  const query = querystring.stringify({
    query: sendComment(text, user_id, product_id),
  });

  return dispatch => {
    requests.post('/data?' + query).then((response) => {
			console.log(response);

      const comment = response.data.data.createComment.comment;
      const data = normalize(comment, CommentNormalizer);
			dispatch(receiveComment(data));
    });
  }
}

export function receiveComment(data) {
  return {
    type: RECEIVE_COMMENT,
    data
  }
}
