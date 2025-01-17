import React from 'react'

const Modal = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <p className="text-sm text-gray-500 mb-2">
          <strong>Category:</strong> {post.tags}
        </p>

        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>

        <p className="mb-4">{post.text}</p>

        <p className="text-sm text-gray-500 mb-2">
          <strong>Author:</strong> {post.autor}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Date:</strong> {post.date}
        </p>
        {post.views && (
          <p className="text-sm text-gray-500">
            <strong>Views:</strong> {post.views}
          </p>
        )}
      </div>
    </div>
  )
}

export default Modal
