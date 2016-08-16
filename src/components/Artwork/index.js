import React from 'react'
import { Link } from 'react-router'

import classnames from 'classnames'

import styles from './index.css'

export default class Artwork extends React.Component {
  getDefaultProps() {
    return {
      id: '000',
      title: 'Titulo',
      className: null,
      price: {
        value: 2.99,
        currency: 'USD',
      }
    }
  }

  render() {
    const {
      id,
      className,
      screenshot,
      title,
      price,
    } = this.props;

    const classes = classnames(styles.component, {
      [className]: !!className,
    });

    const link = `artwork/${id}`;

    return (
      <div className={classes}>
        <img src={ screenshot } />
        <div className="details">
          <h2><Link to={link}>{ title }</Link></h2>
          <p>
            { price.value }
            { price.currency }
          </p>
        </div>
      </div>
    );
  }
};

