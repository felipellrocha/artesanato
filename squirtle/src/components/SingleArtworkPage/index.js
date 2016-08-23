import React from 'react'
import { connect } from 'react-redux'

import {
  artwork as artworkOptions
} from 'constants/rendering'

import { FormattedMessage } from 'react-intl'

import Separator from 'components/Separator'
import Artwork from 'components/Artwork'
import Profile from 'components/Profile'
import Comment from 'components/Comment'
import { loadSingleProduct } from 'actions/page'

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
import { largeMargin } from 'components/Profile/index.css'
import { largeImage } from 'components/Artwork/index.css'

export default class SingleArtworkPage extends React.Component {
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

  render() {
    const {
      artwork,
      seller,
      comments,
    } = this.props;

    if (!artwork) return null;

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

  return {
    artwork,
    seller,
    comments,
  }
})(SingleArtworkPage)
