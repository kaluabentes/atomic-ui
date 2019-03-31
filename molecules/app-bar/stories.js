import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import Title from '_atoms/title'
import IconButton from '_molecules/icon-button'

import AppBar from '.'

const children = (
  <Fragment>
    <IconButton type={IconButton.types.primary} iconType="menu" />
    <Title>News</Title>
    <IconButton type={IconButton.types.primary} iconType="face" />
  </Fragment>
)

storiesOf('Molecules/AppBar', module)
  .add('default', () => <AppBar>{children}</AppBar>)
  .add('fixed', () => <AppBar isFixed>{children}</AppBar>)
