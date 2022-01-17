import { render, screen } from '@testing-library/react'
import { AiFillGoogleCircle } from 'react-icons/ai'

import Button from '.'

describe('<Button />', () => {
  it('should render default button', () => {
    const { container } = render(<Button>Sign In</Button>)

    expect(screen.getByText(/Sign In/i)).toHaveClass('py-3 px-10')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render outline button', () => {
    render(<Button variant="outline">Sign in</Button >)

    expect(screen.getByText(/Sign In/i)).toHaveClass('bg-transparent text-black border hover:border-gray-300')

  })

  it('should render icon', () => {
    render(<Button icon={<AiFillGoogleCircle data-testid="icon" />}>Sign in with Google</Button>)

    expect(screen.getByText(/Sign in with Google/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a disabled Default Button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveClass('disabled:bg-purple-900')
  })

  it('should render a icon when is loading', () => {
    render(<Button isLoading>Sign in with Google</Button>)

    expect(screen.getByTestId('loading-icon')).toBeInTheDocument()

  })
})
