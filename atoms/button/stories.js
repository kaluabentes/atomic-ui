import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '_atoms/button'

storiesOf('Atoms/Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Default</Button>)
  .add('primary', () => (
    <Button type={Button.types.primary} onClick={action('clicked')}>
      Default
    </Button>
  ))
  .add('with loader', () => (
    <div>
      <Button isLoading onClick={action('clicked')}>
        Default
      </Button>
      <Button isLoading type={Button.types.primary} onClick={action('clicked')}>
        Default
      </Button>
    </div>
  ))
