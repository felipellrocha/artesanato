import React from 'react'
import { connect } from 'react-redux'

import styles from './index.css'

import Artwork from 'components/Artwork'

import {
  SingleArtworkSelector,
} from 'selectors/artwork'

export default class SingleArtworkPage extends React.Component {
  render() {
    const {
      artworks,
      params: {
        artworkId,
      }
    } = this.props;

    const artwork = SingleArtworkSelector(artworks, artworkId);

    return (
      <div className={styles.component}>
        <div className='market'>
          <Artwork
            {...artwork}
          />)
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
