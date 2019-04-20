import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Icon from "_atoms/icon"

import styles from "./styles.css"

const MenuItem = ({ iconType, onClick, children, className }) => (
  <button
    className={classNames(styles.button, className)}
    type="button"
    onClick={onClick}
  >
    {iconType && <Icon className={styles.icon} type={iconType} />}
    <div className={styles.text}>{children}</div>
  </button>
)

MenuItem.propTypes = {
  iconType: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

MenuItem.defaultProps = {
  iconType: undefined,
  onClick: () => {},
  className: undefined,
}

export default MenuItem
