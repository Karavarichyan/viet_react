// import React, { useEffect, useState } from 'react';
// import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
// import DropdownMenu from './DropdownMenu';

// const Header = ({ onSearch }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isHidden, setIsHidden] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');

//   const menuItems = [
//     { label: 'Demos', items: [{ label: 'Demo 1', items: [] }, 'Demo 2', 'Demo 3'] },
//     { label: 'Post', items: ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post'] },
//     { label: 'Features', items: ['Feature 1', 'Feature 2', 'Feature 3'] },
//     { label: 'Categories', items: ['Category 1', 'Category 2', 'Category 3'] },
//     { label: 'Shop', items: ['Product 1', 'Product 2', 'Product 3'] },
//     { label: 'Buy Now', items: [] },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsHidden(window.scrollY > 200 && window.scrollY > scrollPosition);
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrollPosition]);

//   const handleDropdownToggle = (index) => {
//     setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const handleCloseAllMenus = () => {
//     setIsMobileMenuOpen(false);
//     setOpenDropdown(null);
//   };

//   const handleSearchToggle = () => {
//     setIsSearchOpen(!isSearchOpen);
//     setSearchQuery('');
//     onSearch('');
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     onSearch(value);
//   };

//   return (
//     <header
//       className={`sticky top-0 bg-white shadow-md transition-transform duration-300 ${
//         isHidden ? '-translate-y-full' : 'translate-y-0'
//       }`}
//     >
//       <div className="flex items-center justify-between p-4 relative">
//         <button
//           className="text-2xl md:hidden"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         <div className="flex-grow text-center">
//           <img
//             src="/Logotype.svg"
//             alt="Logo"
//             className="w-32 h-auto inline-block"
//           />
//         </div>

//         <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//           {isSearchOpen ? (
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 hover:text-black"
//                 onClick={handleSearchToggle}
//               >
//                 <FaTimes />
//               </button>
//             </div>
//           ) : (
//             <button
//               className="text-2xl text-gray-600 hover:text-black focus:outline-none"
//               onClick={handleSearchToggle}
//             >
//               <FaSearch />
//             </button>
//           )}
//         </div>
//       </div>

//       <nav className="hidden md:flex justify-center space-x-8 border-t pt-2">
//         {menuItems.map((menuItem, index) => (
//           <DropdownMenu
//             key={index}
//             label={menuItem.label}
//             items={menuItem.items}
//             isOpen={openDropdown === index}
//             onToggle={() => handleDropdownToggle(index)}
//           />
//         ))}
//       </nav>

//       {isMobileMenuOpen && (
//         <div className="fixed bg-white shadow-lg z-50 w-[320px] h-[816px] top-[-1px] right-[55px]">
//           <div className="flex items-center justify-between p-4 border-b">
//             <div className="flex-grow text-center">
//           <img
//             src="/Logotype.svg"
//             alt="Logo"
//             className="w-32 h-auto inline-block"
//           />
//         </div>
//             <button
//               className="text-2xl text-gray-600 hover:text-black"
//               onClick={handleCloseAllMenus}
//             >
//               <FaTimes />
//             </button>
//           </div>
//           <div className="p-4">
//             {menuItems.map((menuItem, index) => (
//               <DropdownMenu
//                 key={index}
//                 label={menuItem.label}
//                 items={menuItem.items}
//                 isOpen={openDropdown === index}
//                 onToggle={() => handleDropdownToggle(index)}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';

const Header = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { label: 'Demos', items: ['Demo 1', 'Demo 2', 'Demo 3'] },
    { label: 'Post', items: ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post'] },
    { label: 'Features', items: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { label: 'Categories', items: ['Category 1', 'Category 2', 'Category 3'] },
    { label: 'Shop', items: ['Product 1', 'Product 2', 'Product 3'] },
    { label: 'Buy Now', items: [] },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 200 && window.scrollY > scrollPosition);
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
    onSearch('');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <header className={`sticky top-0 bg-white shadow-md transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex items-center justify-between p-4">
        <button className="text-2xl md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="flex-grow text-center">
          <img src="/Logotype.svg" alt="Logo" className="w-32 h-auto inline-block"  />
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
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
            <button className="text-2xl pb-2 text-gray-600 hover:text-black focus:outline-none" onClick={handleSearchToggle}>
              <FaSearch />
            </button>
          )}
        </div>
      </div>

      <nav className="hidden md:flex justify-center space-x-8 border-t pt-2">
        {menuItems.map((menuItem, index) => (
          <DropdownMenu key={index} label={menuItem.label} items={menuItem.items} />
        ))}
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed bg-white shadow-lg z-50 w-[320px] h-[816px] top-[-1px] right-[55px]">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex-grow text-center">
              <img src="/Logotype.svg" alt="Logo" className="w-32 h-auto inline-block" />
            </div>
            <button className="text-2xl text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="p-4">
            {menuItems.map((menuItem, index) => (
              <DropdownMenu key={index} label={menuItem.label} items={menuItem.items} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
