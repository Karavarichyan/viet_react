import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import DropdownMenu from './DropdownMenu'

const menuItems = [
  {
    label: 'Demos',
    items: [
      {
        label: 'Demo 1',
        items: ['Sub Demo 1', 'Sub Demo 2'],
      },
      'Demo 2',
      'Demo 3',
    ],
  },
  {
    label: 'Post',
    items: [
      {
        label: 'Post Header',
        items: ['Header Sub 1', 'Header Sub 2'],
      },
      'Post Layout',
      'Share Buttons',
      'Gallery Post',
      'Video Post',
    ],
  },
  {
    label: 'Features',
    items: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    label: 'Categories',
    items: ['Category 1', 'Category 2', 'Category 3'],
  },
  {
    label: 'Shop',
    items: ['Product 1', 'Product 2', 'Product 3'],
  },
  {
    label: 'Buy Now',
    items: [],
  },
]

const Header = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [openSubAccordion, setOpenSubAccordion] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
    return () => document.body.classList.remove('overflow-y-hidden')
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY > 200 && window.scrollY > lastScrollY) {
          setIsHidden(true)
        } else {
          setIsHidden(false)
        }
        setLastScrollY(window.scrollY)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
    setSearchQuery('')
    onSearch('')
  }

  const handleInputChange = e => {
    const value = e.target.value
    setSearchQuery(value)
    onSearch(value)
  }

  return (
    <header
      className={`sticky top-0 bg-white shadow-md transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center justify-between p-4 relative">
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FaBars />
        </button>

        <div className="flex-grow text-center">
          <img
            src="/Logotype.svg"
            alt="Logo"
            className="w-32 h-auto inline-block"
          />
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          {isSearchOpen ? (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 hover:text-black"
                onClick={handleSearchToggle}
              >
                <FaTimes />
              </button>
            </div>
          ) : (
            <button
              className="text-2xl pb-2 text-gray-600 hover:text-black focus:outline-none"
              onClick={handleSearchToggle}
            >
              <FaSearch />
            </button>
          )}
        </div>
      </div>

      <nav className="hidden md:flex justify-center space-x-8 border-t pt-2">
        {menuItems.map((menuItem, index) => (
          <DropdownMenu
            key={index}
            label={menuItem.label}
            items={menuItem.items || []}
            isMobile={false}
          />
        ))}
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white/50 z-50 h-dvh"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-[calc(100%-40px)] h-full p-4 relative border-r border-r-[#E9E9E9]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b">
              <img src="/Logotype.svg" alt="Logo" className="w-32 h-auto" />
              <button
                className="text-2xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col divide-y divide-[#E9E9E9]">
              {menuItems.map((menuItem, index) => (
                <div key={index}>
                  <button
                    className="flex justify-between w-full p-3 text-left"
                    onClick={() =>
                      setOpenAccordion(openAccordion === index ? null : index)
                    }
                  >
                    {menuItem.label}
                    <FaAngleDown
                      className={`transform transition-transform ${
                        openAccordion === index ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all ${
                      openAccordion === index
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    {menuItem.items.map((item, subIndex) => (
                      <div key={subIndex}>
                        {typeof item === 'object' ? (
                          <>
                            <button
                              className="flex justify-between w-full p-3 pl-6 text-left"
                              onClick={() =>
                                setOpenSubAccordion(
                                  openSubAccordion === subIndex
                                    ? null
                                    : subIndex
                                )
                              }
                            >
                              {item.label}
                              <FaAngleDown
                                className={`transform transition-transform ${
                                  openSubAccordion === subIndex
                                    ? 'rotate-180'
                                    : 'rotate-0'
                                }`}
                              />
                            </button>
                            <div
                              className={`overflow-hidden transition-all ${
                                openSubAccordion === subIndex
                                  ? 'max-h-40 opacity-100'
                                  : 'max-h-0 opacity-0'
                              }`}
                            >
                              {item.items.map((subItem, subSubIndex) => (
                                <div key={subSubIndex} className="p-3 pl-12">
                                  {subItem}
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="p-3 pl-6">{item}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
