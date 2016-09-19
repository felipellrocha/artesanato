import React from 'react'
import { connect } from 'react-redux'

import {
  FormattedMessage,
} from 'react-intl'

import Product from 'components/Product'
import { loadSearchPage } from 'actions/page'

import styles from './index.css'
import { listItem } from 'components/Product/index.css'

import {
  SingleTermSelector,
} from 'data/search/selectors'

import {
  SingleProductSelector,
} from 'data/products/selectors'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadSearchPage())
  }

  render() {
    const {
      products,
      terms,
    } = this.props;

    console.log(terms);

    return (
      <div className={styles.component}>
        <div className='banner'>
          <img src='images/caruaru.jpg' />
          <div className='input'>
            <input placeholder='O que voce esta procurando?' />
            <a className='submit'>Procurar</a>
          </div>
        </div>
        <div className='market'>
          <div className='sidebar'>
            <h2>Refinar a procura</h2>
            {
              terms.map((term, i) => {
                return (
                  <a className='search-term'>
                    <span>{term.key}</span>
                    <span>{term.doc_count}</span>
                  </a>
                )
              })
            }
          </div>
          <div className='main'>
            <h1><FormattedMessage id='SearchPage.search' /></h1>
            {
              products.map((product, i) => {
                return (
                  <Product
                    {...product}
                    key={i}
                    className={ listItem }
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
};

export default connect(state => {
  const products = state.ui.productList.map(d => SingleProductSelector(state, d));
  const terms = state.ui.termsList.map(d => SingleTermSelector(state, d));

  return {
    products,
    terms,
  }
})(Home)
