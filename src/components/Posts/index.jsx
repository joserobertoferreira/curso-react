import propTypes from 'prop-types'

import { PostCard } from '../PostCard'

import './styles.css'

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} id={post.id} title={post.title} body={post.body} cover={post.cover} />
      //<PostCard post={post} />
    ))}
  </div>
)

Posts.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
      cover: propTypes.string.isRequired,
    }),
  ),
}
