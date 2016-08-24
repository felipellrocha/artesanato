import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import { HomeLink } from 'Links'

import { FormattedMessage } from 'react-intl'

import classnames from 'classnames'

import {
  requestAuthToken,
} from 'actions/authentication'

import {
  form,
  button,
  secondaryButton,
} from 'components/App/index.css'

import styles from './index.css'

class Component extends React.Component {
  _handleClick_() {
    const { dispatch } = this.props;

    const auth = {
      username: this.refs.username.value,
      password: this.refs.password.value,
    };
    dispatch(requestAuthToken(auth));
  }

  render() {
    const classes = classnames(styles.component, {
      [this.props.className]: !!this.props.className
    });

    const secondary = classnames(button, secondaryButton);

    return (
      <div className={ classes }>
        <div className={ form }>
          <div className='input'>
            <label><FormattedMessage id='AuthForm.username' /></label>
            <input type='text' ref='username' />
          </div>
          <div className='input'>
            <label><FormattedMessage id='AuthForm.password' /></label>
            <input type='password' ref='password' />
          </div>
        </div>
        <div className='button-section'>
          <a className={ button } onClick={this._handleClick_.bind(this)}>
            <FormattedMessage id='AuthForm.login' />
          </a>
          <a className={ secondary }><FormattedMessage id='AuthForm.forgot' /></a>
        </div>
      </div>
    );
  }
};

export default connect()(Component);
