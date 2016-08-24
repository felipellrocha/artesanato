import React from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'

import styles from './index.css'

class Component extends React.Component {
  static defaultProps = {
    display: true,
    overlay: false, // if you set this to true, it's your
                   // responsibility to position the Dropdown
  }

  render() {
    const display = {
      display: (this.props.display) ? 'block' : 'none',
    }

    const classes = classnames({
      [styles.overlay]: this.props.overlay,
      [styles.regular]: !this.props.overlay,
      [this.props.className]: !!this.props.className,
    });

    return (
      <div className={classes} style={display}>
        <div className='overlay'>
          { this.props.children }
        </div>
      </div>
    );
  }
};

export default Component;
