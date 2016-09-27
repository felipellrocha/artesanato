import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import {
  FormattedMessage,
} from 'react-intl'

import {
  SearchLink,
} from 'Links'

import Product from 'components/Product'
import { loadSearchPage } from 'actions/page'

import styles from './index.css'
import { rowItem } from 'components/Product/index.css'

import {
  SingleTermSelector,
} from 'data/search/selectors'

import {
  SingleProductSelector,
} from 'data/products/selectors'

class Component extends React.Component {

  componentDidMount() {
    const {
      dispatch,
      searchFilter,
    } = this.props;

    dispatch(loadSearchPage({ filter: searchFilter }))
  }

  _handleSearch_(event) {
    const {
      dispatch,
    } = this.props;

    dispatch(loadSearchPage({ filter: event.target.value }))
    hashHistory.push(SearchLink({
      filter: event.target.value
    }));
  }

  render() {
    const {
      products,
      terms,
      searchFilter,
    } = this.props;

    return (
      <div className={styles.component}>
        <div className='banner'>
          <img src='images/caruaru.jpg' />
          <div className='input'>
            <input
              placeholder='O que voce esta procurando?'
              value={searchFilter}
              onChange={this._handleSearch_.bind(this)}
            />
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
                    className={ rowItem }
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

export default connect((state, props) => {
  const products = state.ui.productList.map(d => SingleProductSelector(state, d));
  const terms = state.ui.termsList.map(d => SingleTermSelector(state, d));
  const searchFilter = props.location.query.filter;

  return {
    products,
    terms,
    searchFilter,
  }
})(Component)
