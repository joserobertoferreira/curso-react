import { render, screen } from '@testing-library/react'

import { PostCard } from '.'
import { postCardPropsMock } from './mock'

const props = postCardPropsMock

describe('<PostCard />', () => {
  it('should render a PostCard correctly', () => {
    render(<PostCard {...props} />)

    expect(screen.getByRole('img', { name: /Hello/i })).toHaveAttribute('src', 'img/img.png')
  })
  expect(screen.getByRole('heading', { name: 'Hello 1' })).toBeInTheDocument()
  expect(screen.getByText('Word')).toBeInTheDocument()
})
