import React from 'react'
import { connect } from 'react-redux'

import { FormattedMessage } from 'react-intl'

import AuthForm from 'components/AuthForm'

import styles from './index.css'

class Component extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <AuthForm />
      </div>
    );
  }
};


export default connect()(Component)
