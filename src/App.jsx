// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
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
