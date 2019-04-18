import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.css"

const Copyright = ({ className, children }) => (
  <div className={classNames(styles.copyright, className)}>
    &copy; {children} {new Date().getFullYear()}
  </div>
)

Copyright.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Copyright.defaultProps = {
  className: undefined,
}

export default Copyright
