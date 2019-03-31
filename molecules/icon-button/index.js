import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '_atoms/icon'

import styles from './styles.css'

const TYPES = {
  default: styles.default,
  primary: styles.primary,
}

const IconButton = ({ type, iconType, className, onClick }) => (
  <button
    type="button"
    className={classNames(styles.iconButton, type, className)}
    onClick={onClick}
  >
    <Icon className={styles.icon} type={iconType} />
    <span className={styles.hoverEffect} />
  </button>
)

IconButton.propTypes = {
  iconType: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

IconButton.defaultProps = {
  iconType: undefined,
  className: undefined,
  type: TYPES.default,
  onClick: () => {},
}

IconButton.types = TYPES

export default IconButton
