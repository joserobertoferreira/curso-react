import propTypes from 'prop-types'

import './styles.css'

export const PostCard = ({ id, title, body, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
)

PostCard.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  cover: propTypes.string.isRequired,
}

/* export const PostCard = ({ post }) => {
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div key={post.id} className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
 */
