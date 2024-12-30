import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";

export function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Botão do Dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center hover:text-gray-600"
      >
   
        <FaChevronDown className="ml-2 text-primary-bluebasic" />
      </button>

      {/* Conteúdo do Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Disabled
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}