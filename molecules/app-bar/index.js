import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const AppBar = ({ isFixed, className, children }) => (
  <header className={classNames(styles.appBar, { [styles.fixed]: isFixed }, className)}>
    {children}
  </header>
)

AppBar.propTypes = {
  isFixed: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

AppBar.defaultProps = {
  isFixed: false,
  className: undefined,
}

export default AppBar
