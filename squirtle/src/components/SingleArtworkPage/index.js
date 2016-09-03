import React from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'

import {
  artwork as artworkOptions
} from 'constants/rendering'

import { FormattedMessage } from 'react-intl'

import Separator from 'components/Separator'
import Artwork from 'components/Artwork'
import Profile from 'components/Profile'
import Comment from 'components/Comment'
import { loadSingleProduct } from 'actions/page'
import { submitComment } from 'actions/comment'

import {
  CommentsOfProductSelector,
} from 'data/comments/selectors'

import {
  SellerOfProductSelector,
} from 'data/profiles/selectors'

import {
  SingleArtworkSelector,
} from 'data/products/selectors'

import styles from './index.css'
import { button, inactiveButton } from 'components/App/index.css'
import { largeMargin } from 'components/Profile/index.css'
import { largeImage } from 'components/Artwork/index.css'

import {
  typeTextarea,
} from 'actions/ui'

export default class SingleArtworkPage extends React.Component {
  static defaultProps = {
    maxLengthComment: 500,
  }

  componentDidMount() {
    const {
      dispatch,
      artworks,
      params: {
        artworkId,
      }
    } = this.props;
    
    dispatch(loadSingleProduct(artworkId))
  }

  _handleType_(event) {
    const {
      dispatch,
      maxLengthComment,
      comment,
    } = this.props;

    if (event.target.value.length <= maxLengthComment)
      dispatch(typeTextarea(event.target.value));
  }

  _handleSubmit_() {
    const {
      artwork,
      seller,
      dispatch,
    } = this.props;

    dispatch(submitComment(
      this.refs.comment.value,
      seller.pk,
      artwork.pk,
    ));
  }

  render() {
    const {
      artwork,
      seller,
      comments,
      comment,
      maxLengthComment,
    } = this.props;

    if (!artwork) return null;

    const buttonClasses = classnames(
      button,
      { [inactiveButton]: comment.length <= 0 }
    )

    return (
      <div className={styles.component}>
        <div className='market'>
          <div className='sidebar'>
            <h2><FormattedMessage id='Common.seller' /></h2>
            <Profile {...seller} className={largeMargin} />
          </div>
          <div className='main'>
            <Artwork {...artwork} className={largeImage} />
            {!!comments.length &&
              <div>
                <Separator><FormattedMessage id='SingleArtworkPage.comment' /></Separator>
                {comments.map(comment =>
                  <Comment {...comment} key={comment.id} />
                )}
              </div>
            }
            <textarea
              placeholder='Write a comment'
              value={comment}
              ref={'comment'}
              onChange={this._handleType_.bind(this)}
            />
            <div className='comment-meta'>
              <div className='button-group'>
                <a className={buttonClasses} onClick={this._handleSubmit_.bind(this)}>Submit</a>
              </div>
              <span>{comment.length}/{maxLengthComment}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default connect((state, props) => {
  const artwork = SingleArtworkSelector(state, props.params.artworkId);
  const seller = SellerOfProductSelector(state, artwork);
  const comments = CommentsOfProductSelector(state, artwork);
  const comment = state.ui.comment;

  return {
    artwork,
    seller,
    comments,
    comment,
  }
})(SingleArtworkPage)
