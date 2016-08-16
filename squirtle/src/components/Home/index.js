import React from 'react'
import { connect } from 'react-redux'

import Artwork from 'components/Artwork'

import banner from 'images/caruaru.jpg'

import styles from './index.css'

import {
  ArtworkMapSelector,
  SingleArtworkSelector,
} from 'selectors/artwork'

class Home extends React.Component {
  render() {
    const {
      artworks,
    } = this.props;

    console.log(ArtworkMapSelector(artworks, (artwork, i) => console.log(artwork)));

    return (
      <div className={styles.component}>
        <div className='banner'>
          <div className='message'>
            <h3>Artesanato</h3> 
            <p>facil, e barato</p>
          </div>
          <img src={banner} />
          <div className='input'>
            <input placeholder='O que voce esta procurando?' />
            <a className='submit'>Procurar</a>
          </div>
        </div>
        <div className='market'>
          {
            ArtworkMapSelector(artworks).map((id, i) => {
              const artwork = SingleArtworkSelector(artworks, id)
              return (
                <Artwork
                  {...artwork}
                  key={i}
                  className={styles.cardSpacing}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
};

export default connect(state => {
  return {
    artworks: state.artwork,
  }
})(Home)
