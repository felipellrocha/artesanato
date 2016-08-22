import React from 'react'

export default class InlineSVG extends React.Component {
  static defaultProps = {
    src: 'store',
  }

  render() {
    const src = require(`svg/${this.props.src}.svg`);

    return (
      <span dangerouslySetInnerHTML={{__html: src}} />
    )
  }
}
