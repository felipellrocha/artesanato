import React from 'react'
import { connect } from 'react-redux'

import styles from './index.css'

import {
  artwork as artworkOptions
} from 'constants/rendering'

import Artwork from 'components/Artwork'
import Profile from 'components/Profile'
import { loadSingleProduct } from 'actions/page'

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
    } = this.props;

    if (!artwork) return null;

    return (
      <div className={styles.component}>
        <div className='market'>
          <div className='sidebar'>
            <h2>Artista</h2>
            <Profile {...seller} />
          </div>
          <Artwork {...artwork} />
        </div>
      </div>
    );
  }
};


export default connect((state, props) => {
  const artwork = SingleArtworkSelector(state, props.params.artworkId);
  const seller = SellerOfProductSelector(state, artwork);

  return {
    artwork,
    seller,
  }
})(SingleArtworkPage)
