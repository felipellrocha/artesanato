import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import { ProductLink } from 'Links'

import { product } from 'constants'
import classnames from 'classnames'

import { addToCart } from 'actions/cart'
import { isProductInCart } from 'data/cart/selectors'

import { FormattedMessage } from 'react-intl'

import styles from './index.css'
import { button } from 'components/App/index.css'

class Component extends React.Component {
  static defaultProps() {
    return {
      id: '000',
    }
  }

  _handleAddToCart_() {
    const {
      dispatch,
      id,
    } = this.props;

    dispatch(addToCart(id))
  }

  render() {
    const {
      isInCart,

      id,
      screenshot,
      title,
      priceValue,
      priceCurrency,
      description,

      className,
    } = this.props;

    const classes = classnames(styles.component, {
      [className]: !!className,
    });

    const addToCartClasses = classnames('add-to-cart', button);

    return (
      <div className={ classes }>
        {screenshot &&
          <div className='screenshot'>
            <Link to={ ProductLink(id) }>
              <img src={ screenshot } />
            </Link>
          </div>
        }
        <div className='details'>
          <div className='row'>
            <h2><Link to={ ProductLink(id) }>{ title }</Link></h2>
            {!isInCart &&
              <a className={ addToCartClasses } onClick={this._handleAddToCart_.bind(this)}>
                <FormattedMessage id='Product.addToCart' />
                <p className='price'>
                  <span className='value'>{ priceValue }</span>
                  <span className='currency'>{ priceCurrency }</span>
                </p>
              </a>
            }
          </div>
          {description && <p className='description'>{ description }</p>}
        </div>
      </div>
    );
  }
};

export default connect((state, props) => ({
  isInCart: isProductInCart(state, props.id),
}))(Component)
