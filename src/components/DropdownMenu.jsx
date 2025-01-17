// import React from 'react';
// import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

// const DropdownMenu = ({ label, items, isOpen, onToggle }) => {
//   return (
//     <div className="relative">
//       <div
//         onClick={onToggle}
//         className="flex justify-between items-center px-4 py-3 cursor-pointer text-black hover:bg-gray-100"
//       >
//         <span>{label}</span>
//         {items.length > 0 && <FaAngleDown />}
//       </div>

//       {isOpen && (
//         <ul className="absolute left-0 bg-white shadow-lg border border-gray-200 rounded-md z-50 mt-2 w-48">
//           {items.map((item, index) => (
//             <li
//               key={index}
//               className="flex justify-between items-center px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
//             >
//               {item}
//               <FaAngleRight />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;
import React from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

const DropdownMenu = ({ label, items }) => {
  return (
    <div className="relative group">
      <button className="w-full flex justify-between items-center px-4 py-3 text-black font-bold hover:text-gray-500 transition">
        {label}
        {items.length > 0 && <FaAngleDown />}
      </button>

      {items.length > 0 && (
        <ul className="absolute left-0 top-full bg-white shadow-md border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 w-48">
          {items.map((item, index) => (
            <li key={index} className="border-b last:border-b-0">
              <a href="#" className="block px-4 py-2 text-black hover:text-gray-500 hover:bg-gray-100 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
