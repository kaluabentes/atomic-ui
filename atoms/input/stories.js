import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Input from '.'

storiesOf('Atoms/Input', module)
  .add('with input', () => (
    <Input value={text('Name', 'John Doe')} onChange={action('Input changed')} />
  ))
  .add('with placeholder', () => (
    <div>
      <Input onChange={action('Input changed')} placeholder="First name" />
      <Input
        onChange={action('Input changed')}
        placeholder="Email"
        value={text('Email', 'johndoe@gmail.com')}
      />
    </div>
  ))
  .add('with error', () => (
    <Input
      hasError
      errorMessage="Invalid input"
      value={text('Name', 'John Doe')}
      onChange={action('Input changed')}
    />
  ))
  .add('piled up', () => (
    <div>
      <Input value={text('Name', 'John Doe')} onChange={action('Input changed')} />
      <Input
        hasError
        errorMessage="Invalid input"
        value={text('Email', 'johndoe@gmail.com')}
        onChange={action('Input changed')}
      />
      <Input value={text('Address', 'John Doe St, 405')} onChange={action('Input changed')} />
    </div>
  ))
  .add('disabled', () => (
    <Input
      hasError
      isDisabled
      value={text('Name', 'John Doe')}
      onChange={action('Input changed')}
    />
  ))
