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

import Dropdown from 'components/Dropdown'
import InlineSVG from 'components/InlineSVG'
import Profile from 'components/Profile'

import styles from './index.css'
import { small } from 'components/Profile/index.css'

import { toggleAccountDropdown } from 'actions/ui'

class Component extends React.Component {
  _handleDropdown_() {
    const {
      dispatch,
    } = this.props;

    dispatch(toggleAccountDropdown());
  }

  render() {
    const {
      currentUser,
      isDropdownOpen,
    } = this.props;

    return (
      <div className={styles.component}>
        <div className='logo'><Link to={HomeLink()}>Artesanato</Link></div>
        <ul className='menu'>
          <li><Link to={HomeLink()}><FormattedMessage id='Menu.main' /></Link></li>
          <li><Link to={HomeLink()}><FormattedMessage id='Menu.about' /></Link></li>
          <li><a><InlineSVG src='store' /></a></li>
          {currentUser ?
            <li className='profile' onClick={this._handleDropdown_.bind(this)}>
              <Profile {...currentUser} className={small} />
              <Dropdown className={styles.dropdownMenu} display={isDropdownOpen}>
                <ul>
                  <li><a>Profile</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </Dropdown>
            </li> :
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
    isDropdownOpen: state.ui.dropdowns.account,
  }
})(Component);
