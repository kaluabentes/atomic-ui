import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Icon = ({ className, type }) => <i className={classNames(styles.icon, className)}>{type}</i>

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
}

Icon.defaultProps = {
  className: undefined,
  type: undefined,
}

export default Icon
