import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="text-xl text-gray-600 hover:text-black focus:outline-none transition"
      >
        <FaSearch />
      </button>

      {isSearchOpen && (
        <input
          type="text"
          placeholder="Search..."
          className="absolute right-0 top-0 mt-2 w-48 p-2 border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        />
      )}
    </div>
  )
}

export default SearchBar
