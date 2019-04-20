import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.css"

const Menu = ({ className, children }) => (
  <nav className={classNames(styles.menu, className)}>{children}</nav>
)

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Menu
