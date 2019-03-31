import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AddressInput from '.'

storiesOf('Atoms/AddressInput', module).add('default', () => (
  <AddressInput placeholder="Digite o seu endereço ou cep" onChange={action('Changed')} />
))
