import React from "react"
import PropTypes from "prop-types"

import "_styles/base.css"

const Base = ({ children }) => children

Base.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Base
