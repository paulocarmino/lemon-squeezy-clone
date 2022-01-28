import { Story, Meta } from '@storybook/react'
import LeftMenu from '.'

export default {
  title: 'LeftMenu',
  component: LeftMenu
} as Meta

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'People', href: '/people' },
  {
    name: 'Store',
    children: [
      { name: 'Products', href: '/products' },
      { name: 'Orders', href: '/orders' },
    ],
  },
  {
    name: 'Reports',
    children: [
      { name: 'All time', href: '/all-time' },
      { name: 'By month', href: '/by-month' },
    ],
  }
]

export const Default: Story = () => (
  <div className="max-w-[280px]">
    <LeftMenu navigation={navigation} />
  </div>
)
