import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button with the text', () => {
    const fn = jest.fn()
    render(<Button text="Load more" actionFn={fn} disabled={false} />)

    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeInTheDocument()
  })

  it('should call function on button click', () => {
    const fn = jest.fn()
    render(<Button text="Load more" actionFn={fn} disabled={false} />)

    const button = screen.getByRole('button', { name: /load more/i })

    userEvent.click(button)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn()
    render(<Button text="Load more" actionFn={fn} disabled={true} />)

    const button = screen.getByRole('button', { name: /load more/i })

    expect(button).toBeDisabled()
  })

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn()
    render(<Button text="Load more" actionFn={fn} disabled={false} />)

    const button = screen.getByRole('button', { name: /load more/i })

    expect(button).toBeEnabled()
  })
})
