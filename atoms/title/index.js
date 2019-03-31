import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Title = ({ className, children }) => (
  <h1 className={classNames(styles.title, className)}>{children}</h1>
)

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Title.defaultProps = {
  className: undefined,
}

export default Title
