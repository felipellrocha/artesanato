import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import { ArtworkLink } from 'Links'

import { ARTWORK } from 'constants'
import classnames from 'classnames'

import styles from './index.css'

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
              <p className='price'>
                <span className='value'>{ price.value }</span>
                <span className='currency'>{ price.currency }</span>
              </p>
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
