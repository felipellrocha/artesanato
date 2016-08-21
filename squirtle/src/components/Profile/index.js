import React from 'react'

import styles from './index.css'

export default class Profile extends React.Component {
  render() {
    const {
      image,
      firstName,
      lastName,
      description,
    } = this.props;

    debugger;

    return (
      <div className={styles.component}>
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

