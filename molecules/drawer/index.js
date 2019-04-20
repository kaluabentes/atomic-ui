import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Paper from "_atoms/paper"

import styles from "./styles.css"

const Drawer = ({ isOpen, className, children }) => (
  <div
    className={classNames(styles.drawer, className, { [styles.open]: isOpen })}
  >
    <Paper className={styles.box}>{children}</Paper>
    <div className={styles.overlay} />
  </div>
)

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Drawer.defaultProps = {
  isOpen: false,
  className: undefined,
}

export default Drawer
