import React from 'react'

import { Link } from 'react-router'
import { HomeLink } from 'Links'

import styles from './index.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <div className='main'>
          <div className='logo'><Link to={HomeLink()}>Artesanato</Link></div>
          <ul className='menu'>
            <li><Link to={HomeLink()}>Pagina Principal</Link></li>
            <li><a>Conta</a></li>
            <li><a>Artesão</a></li>
          </ul>
        </div>
        <div className='bottom'>
          Copyright &copy; 2016
        </div>
      </div>
    );
  }
};

