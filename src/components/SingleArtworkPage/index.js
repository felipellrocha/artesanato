import React from 'react'

import banner from 'images/caruaru.jpg'

import styles from './index.css'

import Artwork from 'components/Artwork'

export default class Home extends React.Component {
  render() {
    const data = [
      {
        title: 'Vasos simples',
        screenshot: require('images/vases.jpg'),
        price: {
          value: 2.99,
          currency: 'USD',
        },
      },
      {
        title: 'Vasos de areia',
        screenshot: require('images/areias.jpg'),
        price: {
          value: 2.99,
          currency: 'USD',
        },
      },
    ]
    return (
      <div className={styles.component}>
        <div className='banner'>
          <div className='message'>
            <h3>Artesanato</h3> 
            <p>facil, e barato</p>
          </div>
          <img src={banner} />
          <div className='input'>
            <input placeholder='O que voce esta procurando?' />
            <a className='submit'>Procurar</a>
          </div>
        </div>
        <div className='market'>
          {data.map((datum, i) =>
            <Artwork
              {...datum}
              key={i}
              className={styles.cardSpacing}
            />)
          }
        </div>
      </div>
    );
  }
};

