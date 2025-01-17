import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import "../DropdownMenu.css";

const DropdownMenu = ({ label, items, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false);
  };

  const handleClick = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isMobile ? "mobile" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdown-label" onClick={handleClick}>
        <span className="text-[16px] leading-[16px] w-[65px] font-medium">{label}</span>
        {items.length > 0 && <FaAngleDown className="arrow-down" />}
      </div>

      <ul className={`dropdown-content divide-y divide-[#E9E9E9] ${isOpen ? "open" : ""}`}>
        {items.map((item, index) =>
          typeof item === "object" ? (
            <li key={index} className="dropdown-submenu">
              <div
                className="submenu-label"
                onMouseEnter={() => setOpenSubmenu(index)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <span className="submenu-text text-[16px] leading-[16px] w-[65px] font-medium">{item.label}</span>
                <FaAngleRight className="arrow-right" />
              </div>
              <ul className={`submenu-content ${openSubmenu === index ? "open" : ""}`}>
                {item.items.map((subItem, subIndex) => (
                  <li className="submenu-item-child text-[16px] leading-[16px] w-[65px] font-medium" key={subIndex}>{subItem}</li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={index} className="submenu-item">
              <span className="text-[16px] leading-[16px] w-[65px] font-medium">{item}</span>
              <FaAngleRight className="arrow-right" />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default DropdownMenu;
