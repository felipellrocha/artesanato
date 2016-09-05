import React from 'react'

import styles from './index.css'

export default class Component extends React.Component {
  static defaultProps = {
    shouldDisplay: true,
  }
  
  render() {
    const {
      children,
      shouldDisplay,
      content,
    } = this.props;

    return (
      <div className={styles.component}>
        { children }

        {shouldDisplay && 
        <div className='badge'>
          { content }
        </div>
        }
      </div>
    );
  }
};

