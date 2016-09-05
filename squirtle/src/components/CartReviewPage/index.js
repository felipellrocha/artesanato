import React from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'

import styles from './index.css'

export default class Component extends React.Component {

  componentDidMount() {
    const {} = this.props;
    
    //dispatch(loadSingleProduct(artworkId))
  }

  render() {
    return (
      <div className={styles.component}>
      </div>
    );
  }
};


export default connect()(Component)
