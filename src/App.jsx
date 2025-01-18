import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import PostList from './components/PostList'

const App = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://cloud.codesupply.co/endpoint/react/data.json'
      )
      const data = await response.json()
      setPosts(data)
      setFilteredPosts(data)
    }

    fetchPosts()
  }, [])

  const handleSearch = query => {
    if (query) {
      const filtered = posts.filter(
        post =>
          (post.title &&
            post.title.toLowerCase().includes(query.toLowerCase())) ||
          (post.text && post.text.toLowerCase().includes(query.toLowerCase()))
      )
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(posts)
    }
  }

  const handlePostClick = post => {
    setSelectedPost(post)
  }

  const closeModal = () => {
    setSelectedPost(null)
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <PostList posts={filteredPosts} onPostClick={handlePostClick} />
      {selectedPost && (
        <Modal
          isOpen={!!selectedPost}
          onClose={closeModal}
          post={selectedPost}
        />
      )}
    </>
  )
}

export default App
