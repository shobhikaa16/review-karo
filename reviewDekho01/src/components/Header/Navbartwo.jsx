import React from "react";
import { Link } from "react-router-dom";

const productCategories = ["Medicines", "Electronics", "Furniture", "Bank", "Stationary", "Clothing", "Food"];

function Navbartwo() {
  const scrollLeft = () => {
    document.getElementById("scrollContainer").scrollBy({ left:-200, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("scrollContainer").scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="bg-white py-2 shadow-md z-10 flex gap-2 justify-center items-center relative">
      {/* Left Scroll Button */}
      <button 
        className="w-10 bg-white p-2 text-gray-400 font-bold hover:bg-gray-100 rounded-full transition"
        onClick={scrollLeft}
      >
        {"<"}
      </button>

      {/* Scrollable Categories (Centered) */}
      <div className="w-full max-w-3xl flex justify-center items-center relative">
        <div 
          id="scrollContainer" 
          className="flex overflow-x-auto whitespace-nowrap space-x-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Extra styles for full scrollbar hiding
        >
          {productCategories.map((category, index) => (
            <Link key={index} to={`/category/${category.toLowerCase()}`}>
              <button className="bg-white border-2 border-green-500 text-black px-4 py-1 rounded-lg hover:bg-green-200 transition">
                {category}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Scroll Button */}
      <button 
        className="w-10 bg-white p-2 text-gray-400 font-bold hover:bg-gray-100 rounded-full transition"
        onClick={scrollRight}
      >
        {">"}
      </button>
    </div>
  );
}

export default Navbartwo;