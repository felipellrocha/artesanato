import React from 'react'

import styles from './index.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <div className='main'>
          <div className='logo'>Artesanato</div>
          <ul className='menu'>
            <li><a>Pagina Principal</a></li>
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

