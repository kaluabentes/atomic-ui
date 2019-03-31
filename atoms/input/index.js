import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Input = ({
  className,
  id,
  name,
  type,
  value,
  errorMessage,
  placeholder,
  onChange,
  isDisabled,
  hasError,
}) => {
  const [hasFocus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }

  return (
    <div className={classNames(styles.container, { [styles.disabled]: isDisabled })}>
      {placeholder && (
        /* eslint-disable-next-line jsx-a11y/label-has-for */
        <label
          htmlFor={id}
          className={classNames(styles.placeholderType, {
            [styles.labelType]: hasFocus || value.length,
          })}
        >
          {placeholder}
        </label>
      )}
      <input
        className={classNames(
          styles.input,
          { [styles.disabled]: isDisabled, [styles.error]: hasError },
          className
        )}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
}

Input.defaultProps = {
  className: undefined,
  id: undefined,
  name: undefined,
  type: undefined,
  value: '',
  errorMessage: undefined,
  placeholder: undefined,
  onChange: () => {},
  isDisabled: false,
  hasError: false,
}

export default Input
