import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import {
  HomeLink,
  LoginLink,
} from 'Links'

import {
  GetCurrentUser,
} from 'data/authentication/selectors'

import { FormattedMessage } from 'react-intl'

import InlineSVG from 'components/InlineSVG'
import Profile from 'components/Profile'

import styles from './index.css'
import { small } from 'components/Profile/index.css'

class Component extends React.Component {
  render() {
    const {
      currentUser,
    } = this.props;

    console.log(currentUser);

    return (
      <div className={styles.component}>
        <div className='logo'><Link to={HomeLink()}>Artesanato</Link></div>
        <ul className='menu'>
          <li><Link to={HomeLink()}><FormattedMessage id='Menu.main' /></Link></li>
          <li><a><InlineSVG src='store' /></a></li>
          {currentUser ?
            <li className='profile'><Profile {...currentUser} className={small} /></li> :
            <li><Link to={LoginLink()}><FormattedMessage id='Menu.account' /></Link></li>
          }
        </ul>
      </div>
    );
  }
};

export default connect(state => {
  return {
    currentUser: GetCurrentUser(state),
  }
})(Component);
