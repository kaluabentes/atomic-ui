import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import IconButton from '.'

storiesOf('Molecules/IconButton', module)
  .add('default', () => <IconButton onClick={action('Clicked')} iconType="face" />)
  .add('primary', () => (
    <IconButton onClick={action('Clicked')} type={IconButton.types.primary} iconType="face" />
  ))
