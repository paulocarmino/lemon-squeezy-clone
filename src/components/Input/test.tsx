import { render, screen } from '@testing-library/react'

import Input from '.'

describe('<Input />', () => {
  it('Renders with label', () => {
    render(<Input label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without label', () => {
    render(<Input />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Render with placeholder', () => {
    render(<Input placeholder='hey' />)

    expect(screen.getByPlaceholderText('hey')).toBeInTheDocument()
  })
})
