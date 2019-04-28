import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import IconButton from '_molecules/icon-button'

import styles from './styles.css'

const CartButton = ({ itemsCount, className, onClick }) => (
  <div className={classNames(styles.container, className)}>
    {itemsCount > 0 && <div className={styles.itemsCount}>{itemsCount}</div>}
    <IconButton
      className={styles.button}
      theme={IconButton.themes.primary}
      iconType="shopping_cart"
      onClick={onClick}
    />
  </div>
)

CartButton.propTypes = {
  itemsCount: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

CartButton.defaultProps = {
  itemsCount: 0,
  className: undefined,
  onClick: () => {},
}

export default CartButton
