import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const renderLevel = (level, className, children) => {
  switch (level) {
    case 'h1':
      return <h1 className={classNames(styles.heading, styles.h1)}>{children}</h1>
    case 'h2':
      return <h2 className={classNames(styles.heading, styles.h2)}>{children}</h2>
    case 'h3':
      return <h3 className={classNames(styles.heading, styles.h3)}>{children}</h3>
    case 'h4':
      return <h4 className={classNames(styles.heading, styles.h4)}>{children}</h4>
    case 'h5':
      return <h5 className={classNames(styles.heading, styles.h5)}>{children}</h5>
    default:
      return <h6 className={classNames(styles.heading, styles.h6)}>{children}</h6>
  }
}

const Heading = ({ level, className, children }) => renderLevel(level, className, children)

Heading.propTypes = {
  level: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  level: undefined,
  className: undefined,
}

export default Heading
