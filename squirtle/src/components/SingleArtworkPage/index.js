import React from 'react'
import { connect } from 'react-redux'

import styles from './index.css'

import {
  artwork as artworkOptions
} from 'constants/rendering'

import Separator from 'components/Separator'
import Artwork from 'components/Artwork'
import Profile from 'components/Profile'
import Comment from 'components/Comment'
import { loadSingleProduct } from 'actions/page'

import {
  CommentsOfProductSelector,
} from 'comments/selectors'

import {
  SellerOfProductSelector,
} from 'profiles/selectors'

import {
  SingleArtworkSelector,
} from 'products/selectors'

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
            <h2>Artista</h2>
            <Profile {...seller} />
          </div>
          <div className='main'>
            <Artwork {...artwork} />
            <Separator>Comments</Separator>
            {comments.map(comment =>
              <Comment {...comment} key={comment.id} />
            )}
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
