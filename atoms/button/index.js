import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Spinner from '_atoms/spinner'

import styles from './styles.css'

const TYPES = {
  default: styles.default,
  primary: styles.primary,
}

const Button = ({ type, className, children, onClick, isLoading }) => (
  <button type="button" onClick={onClick} className={classNames(styles.button, type, className)}>
    {isLoading ? <Spinner size={Spinner.sizes.small} className={styles.spinner} /> : children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  type: TYPES.default,
  className: undefined,
  onClick: () => {},
  isLoading: false,
}

Button.types = TYPES

export default Button
