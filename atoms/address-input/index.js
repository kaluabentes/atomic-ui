import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const AddressInput = ({ id, className, name, value, placeholder, onChange }) => (
  <input
    id={id}
    className={classNames(styles.input, className)}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
)

AddressInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

AddressInput.defaultProps = {
  id: undefined,
  className: undefined,
  placeholder: undefined,
  name: undefined,
  value: undefined,
  onChange: () => {},
}

export default AddressInput
