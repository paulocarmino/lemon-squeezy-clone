import { Story, Meta } from '@storybook/react'
import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} placeholder="sdsd" />

Default.args = {
  label: 'Email'
}
