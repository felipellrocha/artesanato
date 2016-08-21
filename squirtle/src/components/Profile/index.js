import React from 'react'
import classnames from 'classnames'

import styles from './index.css'

export default class Profile extends React.Component {
  render() {
    const {
      image,
      firstName,
      lastName,
      description,

      className
    } = this.props;

    const classes = classnames(styles.component, {
      [className]: !!className,
    });

    return (
      <div className={classes}>
        <div className='row'>
          <div className='profile-image'>
            <img src={ image } />
          </div>
          <h3>{ firstName } { lastName }</h3>
        </div>
        <p>{ description }</p>
      </div>
    );
  }
};

