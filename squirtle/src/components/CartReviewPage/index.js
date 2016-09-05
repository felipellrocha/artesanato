import React from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'

import Product from 'components/Product'
import InlineSVG from 'components/InlineSVG'

import { FormattedNumber } from 'react-intl'

import { loadCartProducts } from 'actions/page'
import {
  addToCart,
  decreaseFromCart,
} from 'actions/cart'

import {
  getProductsInCart,
  getTotal,
} from 'data/cart/selectors'

import styles from './index.css'
import { listItem } from 'components/Product/index.css'

export default class Component extends React.Component {

  componentDidMount() {
    const {
      dispatch,
      ids,
    } = this.props;

    dispatch(loadCartProducts(ids))
  }

  _handleAddToCart_(id) {
    const {
      dispatch,
    } = this.props;

    dispatch(addToCart(id))
  }

  _handleDecreaseFromCart_(id) {
    const {
      dispatch,
    } = this.props;

    dispatch(decreaseFromCart(id))
  }

  render() {
    const {
      products,
      total,
    } = this.props;

    if (!products) return null;

    return (
      <div className={styles.component}>
        {products.map(product =>
          <div className='item' key={product.id}>
            <Product
              { ...product }
              key={ product.id }
              className={ listItem }
            />
            <div className='subtotal'>
              <div className='row'>
                <span>
                  <FormattedNumber
                    style='currency'
                    currency={ product.priceCurrency }
                    value={ product.priceValue }
                  />
                  x
                  <FormattedNumber
                    value={ product.quantity }
                  />
                </span>
              </div>
              <div className='row'>
                <FormattedNumber
                  style='currency'
                  currency={ product.priceCurrency }
                  value={ product.priceValue * product.quantity }
                />
              </div>
            </div>
            <div className='actions'>
              <a onClick={this._handleAddToCart_.bind(this, product.id)}>
                <InlineSVG src='plus-circle' />
              </a>
              <a onClick={this._handleDecreaseFromCart_.bind(this, product.id)}>
                <InlineSVG src='circle-minus' />
              </a>
              <span className='spacer' />
              <span className='spacer' />
              <span className='spacer' />
              <span className='spacer' />
              <a><InlineSVG src='cross' /></a>
            </div>
          </div>
        )}
        <FormattedNumber
          style='currency'
          currency='USD'
          value={ total }
        />
      </div>
    );
  }
};


export default connect((state, props) => {
  const products = getProductsInCart(state)
  const ids = Object.keys(state.cart.products)
  const total = getTotal(products)

  return {
    products,
    ids,
    total,
  }
})(Component)
