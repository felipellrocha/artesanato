import React from 'react'

import { Link } from 'react-router'
import { HomeLink } from 'Links'

import { FormattedMessage } from 'react-intl'

import styles from './index.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <div className='main'>
          <div className='logo'><Link to={HomeLink()}>Artesanato</Link></div>
          <ul className='menu'>
            <li><Link to={HomeLink()}><FormattedMessage id='Menu.main' /></Link></li>
            <li><a><FormattedMessage id='Menu.account' /></a></li>
            <li><a><FormattedMessage id='Common.seller' /></a></li>
          </ul>
        </div>
        <div className='bottom'>
          Copyright &copy; 2016
        </div>
      </div>
    );
  }
};

