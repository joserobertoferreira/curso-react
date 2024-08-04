/* eslint-disable testing-library/no-node-access */
import { Posts } from '.'

const { render, screen } = require('@testing-library/react')

const props = {
  posts: [
    { id: 1, title: 'Test 1', body: 'Post 1', cover: 'img/cover1.jpg' },
    { id: 2, title: 'Test 2', body: 'Post 2', cover: 'img/cover2.jpg' },
    { id: 3, title: 'Test 3', body: 'Post 3', cover: 'img/cover3.jpg' },
  ],
}

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />)

    expect(screen.getAllByRole('heading', { name: /Test/i })).toHaveLength(3)
    expect(screen.getAllByRole('heading', { img: /cover/i })).toHaveLength(3)
    expect(screen.getAllByRole(/Post/i)).toHaveLength(3)
    expect(screen.getAllByRole('img', { name: /Test 2/i })).toHaveAttribute('src', 'img/cover2.jpg')
  })

  it('should render posts without posts', () => {
    render(<Posts />)

    expect(screen.queryByRole('heading', { name: /Test/i })).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
