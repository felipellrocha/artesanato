import React from 'react'
import { Link } from 'react-router'
import { ArtworkLink } from 'Links'

import { ARTWORK } from 'constants'
import classnames from 'classnames'

import styles from './index.css'

export default class Artwork extends React.Component {
  getDefaultProps() {
    return {
      variant: artwork.COMMON,

      id: '000',
      title: 'Titulo',
      className: null,
      price: {
        value: 2.99,
        currency: 'USD',
      },
    }
  }

  _renderCommon() {
    const {
      id,
      className,
      screenshot,
      title,
      price,
      description,
    } = this.props;

    const classes = classnames(styles.component, {
      [className]: !!className,
    });

    const link = `artwork/${id}`;

    return (
      <div className={ classes }>
        {screenshot &&
          <div className="screenshot">
            <Link to={ ArtworkLink(id) }>
              <img src={ screenshot } />
            </Link>
          </div>
        }
        <div className="details">
          <h2><Link to={ link }>{ title }</Link></h2>
          {price &&
            <p className='price'>
              <span className="value">{ price.value }</span>
              <span className="currency">{ price.currency }</span>
            </p>
          }
          <p className='description'>{ description }</p>
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

