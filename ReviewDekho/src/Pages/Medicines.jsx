import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Helper function to convert string to slug format (e.g. "Medicated Soaps" -> "medicated-soaps")
const slugify = (s) =>
  s.toLowerCase().replace(/\s+/g, '-');

// Array of categories with local image paths
const categories = [
  { name: "Tablets", image: "/Assets/tablets.jpg" },
  { name: "Ointments", image: "/Assets/ointments.jpg" },
  { name: "Medicated Soaps", image: "/Assets/medicated-soaps.jpg" },
  { name: "Medicated Facewashes", image: "/Assets/facewashes.jpg" },
  { name: "Shampoos & Conditioners", image: "/Assets/shampoos-conditioners.jpg" },
  { name: "Oils", image: "/Assets/hair-oil.jpg" },
  { name: "Hair Oil", image: "/Assets/hair-oil.jpg" },
  { name: "Syrups", image: "/Assets/syrups.jpg" },
  { name: "Injections", image: "/Assets/injections.jpg" },
  { name: "Face Serums", image: "/Assets/face-serums.jpg" },
  { name: "Eye Drops", image: "/Assets/eye-drops.jpg" },
  { name: "Supplements", image: "/Assets/supplements.jpg" },
  { name: "Creams", image: "/Assets/creams.jpg" },
  { name: "Pain Relievers", image: "/Assets/pain-relievers.jpg" },
  { name: "Antibiotics", image: "/Assets/antibiotics.jpg" },
  { name: "Vitamins", image: "/Assets/vitamins.jpg" }
];

function Medicines() {
  const [searchQuery, setSearchQuery] = useState('');

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
          const categorySlug = slugify(item.name);

          return (
            <div key={item.name} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <Link to={`/category/medicines/${categorySlug}`} className="block">
                <div className="relative h-40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                    <span className="text-black text-xl font-bold">{item.name}</span>
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