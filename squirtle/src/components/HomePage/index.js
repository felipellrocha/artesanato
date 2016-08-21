import React from 'react'
import { connect } from 'react-redux'

import Artwork from 'components/Artwork'
import { loadHomePage } from 'actions/page'

import banner from 'images/caruaru.jpg'

import styles from './index.css'

import {
  SingleArtworkSelector,
} from 'products/selectors'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadHomePage())
  }

  render() {
    const {
      products,
    } = this.props;

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
            products.map((artwork, i) => {
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
  const products = state.ui.productList.map(d => {
    return SingleArtworkSelector(state, d)
  });

  return {
    products,
  }
})(Home)
