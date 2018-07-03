import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ name, onClick }) => (
  <a href="#" onClick={onClick}>{name}</a>
)

Item.propTypes = {
}

export default Item
