import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import { ArtworkLink } from 'Links'

import { ARTWORK } from 'constants'
import classnames from 'classnames'

import { FormattedMessage } from 'react-intl'

import styles from './index.css'
import { button } from 'components/App/index.css'

class Artwork extends React.Component {
  static defaultProps() {
    return {
      variant: artwork.COMMON,
      id: '000',
    }
  }

  _renderCommon() {
    const {
      id,
      screenshot,
      title,
      price,
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
            <Link to={ ArtworkLink(id) }>
              <img src={ screenshot } />
            </Link>
          </div>
        }
        <div className='details'>
          <div className='row'>
            <h2><Link to={ ArtworkLink(id) }>{ title }</Link></h2>
            {price &&
              <a className={ addToCartClasses }>
                <FormattedMessage id='Artwork.addToCart' />
                <p className='price'>
                  <span className='value'>{ price }</span>
                  <span className='currency'>USD</span>
                </p>
              </a>
            }
          </div>
          {description && <p className='description'>{ description }</p>}
        </div>
      </div>
    );
  }

  render() {
    const {
      variants,
    } = this.props;

    return this._renderCommon();
  }
};

export default Artwork
