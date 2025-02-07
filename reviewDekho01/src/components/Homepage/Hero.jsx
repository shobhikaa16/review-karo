"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="bg-[url('https://source.unsplash.com/random/1600x900?medicine')] bg-cover bg-gray-500 bg-center h-screen flex items-center justify-center text-white">
      <div className="text-center space-y-8 p-4">
        <h1 className="text-5xl md:text-6xl font-bold">Find Reviews the best suits your product</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Search and explore reviews for the products you need
        </p>
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search for medicines, brands, or categories..."
              className="w-full py-4 px-6 text-black focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="bg-green-600 p-4 hover:bg-green-700 transition duration-300">
              <Search className="h-6 w-6 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
