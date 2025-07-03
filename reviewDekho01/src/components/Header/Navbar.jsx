// import { Link } from "react-router-dom";
// import { useState } from "react";

// const categories = ["Tablets", "Soaps", "Facewashes"];

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-green-600 text-white p-4 z-50 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">
//           ReviewKaro
//         </Link>

//         <div className="flex items-center space-x-6"> 
//           <Link to="/write-review" className="hover:text-green-200">
//             Write a Review
//           </Link>

//           {/* Dropdown for Categories */}
//           <div className="relative">
//             <button
//               className="hover:text-green-200 px-4 py-2"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               Categories ▼
//             </button>

//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg border border-gray-200">
//                 {categories.map((category, index) => (
//                   <Link
//                     key={index}
//                     to={`/category/${category.toLowerCase()}`}
//                     className="block px-4 py-2 hover:bg-green-100 transition"
//                     onClick={() => setIsDropdownOpen(false)}
//                   >
//                     {category}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link
//             to="/login"
//             className="bg-white text-green-600 px-5 py-2 rounded-md hover:bg-green-100 transition"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import NavbarOne from './NavbarOne';
import Navbartwo from './Navbartwo';

//The Navbar component is a wrapper that combines two separate navbar components
function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white">
      <NavbarOne />
      <Navbartwo />
    </div>
  );
}

export default Navbar;
