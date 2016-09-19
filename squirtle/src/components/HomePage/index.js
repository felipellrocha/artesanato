import React from 'react'
import { connect } from 'react-redux'

import Product from 'components/Product'
import { loadHomePage } from 'actions/page'

import styles from './index.css'

import {
  SingleProductSelector,
} from 'data/products/selectors'

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
          <img src='images/caruaru.jpg' />
          <div className='input'>
            <input placeholder='O que voce esta procurando?' />
            <a className='submit'>Procurar</a>
          </div>
        </div>
        <div className='market'>
          {
            products.map((product, i) => {
              return (
                <Product
                  {...product}
                  key={product.id}
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
    return SingleProductSelector(state, d)
  });

  return {
    products,
  }
})(Home)
