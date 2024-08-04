import { useCallback, useEffect, useState } from 'react'

import { Button } from '../../components/Button'
import { Posts } from '../../components/Posts'
import { TextInput } from '../../components/TextInput'
import { loadPosts } from '../../utils/load-posts'

import './styles.css'

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')

  const noMorePosts = page + perPage >= allPosts.length

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
        // ||
        //post.body.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts

  const handleLoadPosts = useCallback(async (page, perPage) => {
    const postsWithPhotos = await loadPosts()

    setPosts(postsWithPhotos.slice(page, perPage))
    setAllPosts(postsWithPhotos)
  }, [])

  useEffect(() => {
    handleLoadPosts(0, perPage)
  }, [handleLoadPosts, perPage])

  const loadMorePosts = () => {
    const nextPage = page + perPage
    const nextPosts = allPosts.slice(nextPage, nextPage + perPage)

    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target

    setSearchValue(value)
  }

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && (
          <>
            <h1>Search value: {searchValue}</h1>
          </>
        )}

        <TextInput searchValue={searchValue} actionFn={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Not found =(</p>}

      <div className="button-container">
        {!searchValue && <Button text="Load more posts" actionFn={loadMorePosts} disabled={noMorePosts} />}
      </div>
    </section>
  )
}
