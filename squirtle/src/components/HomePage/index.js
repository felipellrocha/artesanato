import React from 'react'
import { connect } from 'react-redux'

import Artwork from 'components/Artwork'
import { loadHomePage } from 'actions/products'

import banner from 'images/caruaru.jpg'

import styles from './index.css'

import {
  ArtworkMapSelector,
  SingleArtworkSelector,
} from 'selectors/artwork'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadHomePage())
  }

  render() {
    const {
      artworks,
    } = this.props;

    const products = ArtworkMapSelector(artworks);

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
            products.map((id, i) => {
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
