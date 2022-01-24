import { fireEvent, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock';

import LeftMenu from '.'

jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('<LeftMenu />', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  const navigation = [
    { name: 'Home', current: false, href: "/" },
    { name: 'People', current: false, href: "/people" },
    {
      name: 'Store',
      current: false,
      children: [
        { name: 'Products', current: false, href: "/products" },
        { name: 'Orders', current: false, href: "/orders" },
      ],
    }
  ]

  it('Submenu should render the submenu content when clicked', async () => {
    render(<LeftMenu navigation={navigation} />)

    const submenu = screen.getByTestId('submenu')
    await fireEvent.click(submenu)

    expect(submenu).toHaveAttribute('aria-expanded', 'true')
  })

  it('Ensure that submenu content is visible when click in submenu button', async () => {
    render(<LeftMenu navigation={navigation} />)

    const submenu = screen.getByTestId('submenu')
    await fireEvent.click(submenu)

    expect(screen.getByTestId('submenu-content')).toBeInTheDocument()
  })

  it('Ensure that submenu has a correct active colors', async () => {
    render(<LeftMenu navigation={navigation} />)

    const submenu = screen.getByTestId('submenu')
    fireEvent.click(submenu)

    const submenuItem = screen.getAllByTestId('submenu-item')[0]
    await fireEvent.click(submenuItem)

    expect(submenuItem).toHaveClass('bg-gray-200 text-primary-500 font-medium')
  })

  it('Ensure that submenu has a correct non-active colors', async () => {
    render(<LeftMenu navigation={navigation} />)

    const submenu = screen.getByTestId('submenu')
    fireEvent.click(submenu)

    const submenuItemActive = screen.getAllByTestId('submenu-item')[0]
    const submenuItemInactive = screen.getAllByTestId('submenu-item')[1]
    await fireEvent.click(submenuItemActive)

    expect(submenuItemInactive).toHaveClass('bg-gray-100 text-gray-500 hover:bg-gray-200')
  })

  it('Ensure that menu has a correct non-active colors', async () => {
    render(<LeftMenu navigation={navigation} />)
    const menuItemInactive = screen.getAllByTestId('menu-item')[1]

    expect(menuItemInactive).toHaveClass('bg-gray-100 text-gray-900 hover:bg-gray-200')
  })

})
