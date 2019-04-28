import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CartButton from '.'

storiesOf('Molecules/CartButton', module).add('default', () => (
  <>
    <CartButton itemsCount={10} onClick={action('Clicked')} />
    <CartButton itemsCount={0} onClick={action('Clicked')} />
  </>
))
