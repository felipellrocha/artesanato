import React from 'react'
import { connect } from 'react-redux'

import styles from './index.css'

import {
  artwork as artworkOptions
} from 'constants/rendering'

import Artwork from 'components/Artwork'
import Profile from 'components/Profile'
import { loadSingleProduct } from 'actions/products'

import {
  SingleArtworkSelector,
} from 'selectors/artwork'

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
      artworks,
      params: {
        artworkId,
      }
    } = this.props;

    const artwork = SingleArtworkSelector(artworks, artworkId);

    if (!artwork) return null;

    return (
      <div className={styles.component}>
        <div className='market'>
          <div className='sidebar'>
            <Profile {...artwork.seller} />
          </div>
          <Artwork
            {...artwork}
            variant={artworkOptions.WITH_DESCRIPTION}
          />
        </div>
      </div>
    );
  }
};


export default connect(state => {
  return {
    artworks: state.artwork,
  }
})(SingleArtworkPage)
