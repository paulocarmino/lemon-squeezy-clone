import { Story, Meta } from '@storybook/react'
import LeftMenu from '.'

export default {
  title: 'LeftMenu',
  component: LeftMenu
} as Meta

export const Default: Story = () => (
  <div className="max-w-[280px]">
    <LeftMenu />
  </div>
)
