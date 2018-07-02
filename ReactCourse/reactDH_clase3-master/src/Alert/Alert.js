import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Alert extends Component {
  render () {
    const { type, children } = this.props
    return (
      <div className={`alert alert-${type}`}>
        {children}
      </div>
    )
  }
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'info'])
}

Alert.defaultProps = {
  type: 'info'
}

export default Alert
