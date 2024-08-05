/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextInput } from '.'

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn()

    render(<TextInput actionFn={fn} searchValue={'teste'} />)

    const input = screen.getByPlaceholderText(/Search posts/i)
    expect(input).toBeInTheDocument()
    expect(input.value).toBe('teste')
  })

  it('should call handleChange function on each key press', () => {
    const fn = jest.fn()

    render(<TextInput actionFn={fn} searchValue="" />)

    const input = screen.getByPlaceholderText(/Search posts/i)
    const value = 'Search'

    userEvent.type(input, value)

    expect(input.value).toBe(value)
    expect(fn).toHaveBeenCalledTimes(value.length)
  })
})
