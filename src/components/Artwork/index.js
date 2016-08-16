import React from 'react'

import classnames from 'classnames'

import styles from './index.css'

export default class Artwork extends React.Component {
  getDefaultProps() {
    return {
      title: 'Titulo',
      className: null,
      price: {
        value: 2.99,
        currency: 'USD',
      }
    }
  }

  render() {
    const classes = classnames(styles.component, {
      [this.props.className]: !!this.props.className,
    });

    return (
      <div className={classes}>
        <img src={ this.props.screenshot } />
        <div className="details">
          <h2>{ this.props.title }</h2>
          <p>
            { this.props.price.value }
            { this.props.price.currency }
          </p>
        </div>
      </div>
    );
  }
};

