import { Story, Meta } from '@storybook/react'
import { AiFillGoogleCircle } from 'react-icons/ai'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    block: {
      control: {
        type: 'boolean'
      }
    },
    isLoading: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outline']
      }
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Sign In',
  block: false,
  isLoading: false,
  variant: 'default'
}

export const Outline: Story<ButtonProps> = (args) => <Button {...args} />

Outline.args = {
  children: 'Click to logout',
  block: false,
  isLoading: false,
  variant: 'outline'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  children: 'Sign in with Google',
  block: false,
  isLoading: false,
  variant: 'outline',
  icon: <AiFillGoogleCircle />
}
