import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Helper function to convert string to slug format (e.g. "Medicated Soaps" -> "medicated-soaps")
const slugify = (s) =>
  s.toLowerCase().replace(/\s+/g, '-');

function Medicines() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    "Tablets", "Ointments", "Medicated Soaps", "Medicated Facewashes",
    "Shampoos & Conditioners", "Oils", "Hair Oil", "Syrups",
    "Injections", "Face Serums", "Eye Drops", "Supplements",
    "Creams", "Pain Relievers", "Antibiotics", "Vitamins"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="bg-[#fcfbf3] p-6">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto my-10">
        <form onSubmit={handleSearch}>
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg px-2">
            <input
              type="text"
              placeholder="Search company or category…"
              className="w-full py-4 text-black focus:outline-none px-3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 p-3 hover:bg-blue-700 transition duration-300 rounded-full"
            >
              <Search className="h-6 w-6 text-white" />
            </button>
          </div>
        </form>
      </div>

      {/* Category Cards */}
      <h1 className="text-3xl font-bold text-center mb-8">Medicine Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item) => {
          // Create slug for each category (e.g. 'Medicated Soaps' -> 'medicated-soaps')
          const categorySlug = slugify(item);

          return (
            <div key={item} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <Link to={`/category/medicines/${categorySlug}`} className="block">
                {/* Placeholder image (replace with your own image or source) */}
                <div className="relative h-40">
                  <img
                    src={`https://source.unsplash.com/400x300/?medicine,${encodeURIComponent(item)}`}
                    alt={item}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{item}</span>
                  </div>
                </div>
              </Link>
              <div className="p-4 text-center">
                <Link to={`/category/medicines/${categorySlug}`}>
                  <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    View Reviews
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Medicines;
