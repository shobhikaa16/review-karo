import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const categories = ["Medicines", "Electronics", "Furniture", "Bank", "stationary"];

const NavbarOne = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  // Function to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-green-500 text-white py-4 z-50 px-7">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ReviewDekho
        </Link>

        <div className="flex items-center space-x-6 text-lg">
          <Link to="/write-review" className="hover:text-green-200">
            Add Review
          </Link>

          {/* Dropdown for Categories */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-green-200 flex items-center px-4 py-3"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Categories</span>
              <FaChevronDown className="w-4 h-4 ml-1 mt-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black z-20 rounded-md shadow-lg border border-gray-200">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-green-100 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="bg-white text-green-600 px-5 py-1 rounded-md hover:bg-green-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOne;