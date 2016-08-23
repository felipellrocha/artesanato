import React from 'react'

import { Link } from 'react-router'
import {
  HomeLink,
  LoginLink,
} from 'Links'

import { FormattedMessage } from 'react-intl'

import InlineSVG from 'components/InlineSVG'

import styles from './index.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <div className='logo'><Link to={HomeLink()}>Artesanato</Link></div>
        <ul className='menu'>
          <li><Link to={HomeLink()}><FormattedMessage id='Menu.main' /></Link></li>
          <li><Link to={LoginLink()}><FormattedMessage id='Menu.account' /></Link></li>
          <li><a><FormattedMessage id='Common.seller' /></a></li>
          <li><a><InlineSVG src='store' /></a></li>
        </ul>
      </div>
    );
  }
};

