import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.css"

const Paper = ({ className, children }) => (
  <div className={classNames(styles.paper, className)}>{children}</div>
)

Paper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Paper.defaultProps = {
  className: undefined,
}

export default Paper
