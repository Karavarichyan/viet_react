import React, { useMemo } from 'react'

const EXCERPT_MAX_CHARS = 200

const PostItem = ({ post, onClick }) => {
  const excerpt = useMemo(
    () =>
      post.text.length > EXCERPT_MAX_CHARS
        ? `${post.text.substring(0, EXCERPT_MAX_CHARS)}...`
        : post.text,
    [post]
  )

  return (
    <div
      className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow font-['Roboto']"
      onClick={() => onClick(post)}
    >
      <img
        src={post.img}
        srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
        alt={post.title}
        className="w-full h-auto"
      />

      <div className="p-4">
        <div className="text-[#EB0028] text-sm font-bold uppercase mb-2">
          {post.tags}
        </div>

        <h2 className="text-2xl font-bold leading-[30px] mb-4">{post.title}</h2>

        <div className="flex items-center text-gray-500 text-sm mb-4 gap-2">
          <p className="font-bold text-[#000000]">{post.autor}</p>
          <p>•</p>
          <p>{post.date}</p>
          <p>• {post.views} Views</p>
        </div>

        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostItem
