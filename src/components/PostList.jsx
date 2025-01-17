import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, onPostClick }) => {
  return (
    <main className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} onClick={onPostClick} />
        ))}
      </div>
    </main>
  )
}

export default PostList
