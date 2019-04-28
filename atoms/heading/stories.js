import React from 'react'
import { storiesOf } from '@storybook/react'

import Heading from '.'

storiesOf('Atoms/Heading', module).add('default', () => (
  <>
    <Heading level="h1">Lorem ipsun indolor</Heading>
    <Heading level="h2">Lorem ipsun indolor</Heading>
    <Heading level="h3">Lorem ipsun indolor</Heading>
    <Heading level="h4">Lorem ipsun indolor</Heading>
    <Heading level="h5">Lorem ipsun indolor</Heading>
    <Heading level="h6">Lorem ipsun indolor</Heading>
  </>
))
