import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search } from 'lucide-react';

// Example: You can fetch this list from backend based on category
const categoryItemsList = {
  medicines: [
    "Glutofine", "HK Vitals Biotin Tablet", "Shelcal 500 Calcium+Vitamin D3 Tablet", "Tablet 4", "Tablet 5",
    // ...more tablets
  ],
  electronics: [
    "iPhone 15", "Samsung Galaxy S24", "Sony WH-1000XM5", "MacBook Air", "Dell XPS 13",
    // ...more electronics
  ],
  furniture: [
    "Ikea Chair", "Urban Ladder Sofa", "Godrej Table", "Nilkamal Bed", "Pepperfry Wardrobe",
    // ...more furniture
  ],
  // Add more categories as needed
};

function CategoryInfo() {
  const { category } = useParams();

  // Get items for the current category, or empty array if not found
  const items = categoryItemsList[category] || [];

  const [selectedItem, setSelectedItem] = useState(null);
  const [summary, setSummary] = useState(null);
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    setLoading(true);
    setError(null);
    setSummary(null);
    setReviews({});

    try {
      const response = await fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: new URLSearchParams({ productName: item, category })
      });
      const data = await response.json();
      setSummary(data.summary);
      setReviews(data.reviews || {});
      setError(data.error);
    } catch (err) {
      setError('Failed to fetch reviews. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-[120px] px-4 sm:px-6 py-8 min-h-screen bg-gray-100 flex flex-col lg:flex-row gap-6">
      {/* Left Side */}
      <div className="lg:w-2/5 w-full bg-white shadow-lg rounded-xl p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Top {items.length} {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Items"}
            </h1>

            {/* Search Bar with Icon */}
            <div className="relative w-60">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <div className="bg-blue-500 rounded-full p-2 shadow-md">
                  <Search className="h-4 w-4 text-white" />
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleItemClick(searchQuery);
                }}
                className="relative w-full flex">
                <input
                  type="text"
                  placeholder={`Search ${category || "item"}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-2 rounded-l-full w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"/>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-full text-sm font-medium">
                  Search
                </button>
              </form>
            </div>
          </div>

          <p className="text-gray-600 mb-2">Popular {category || "items"} in India</p>

          <div className="h-[500px] overflow-y-auto border rounded-lg">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className={`py-3 px-4 border-b last:border-b-0 cursor-pointer transition-colors ${selectedItem === item ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                    }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))
            ) : (
              <p className="text-gray-500 p-4">No items match your search. But you can still search to know about the product.</p>
            )}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-3/5 w-full bg-white shadow-lg rounded-xl p-6 h-fit">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
          {selectedItem || `Select a ${category || "item"}`} Reviews
        </h1>
        <p className="text-gray-600 mb-4">Category: {category ? category.charAt(0).toUpperCase() + category.slice(1) : "N/A"}</p>

        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Reviews & Summary</h2>

          {loading && (
            <div className="flex items-center justify-center py-4">
              <svg className="animate-spin h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Loading reviews...</span>
            </div>
          )}

          {error && <p className="text-red-600 mb-4">{error}</p>}

          {summary && !loading && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg text-blue-800">AI Summary</h3>
              <p className="text-gray-700 mt-2">{summary}</p>
            </div>
          )}

          {reviews && Object.keys(reviews).length > 0 && !loading && (
            <div>
              {Object.keys(reviews).map((source) => (
                <div key={source} className="mb-6">
                  <h3 className="font-semibold text-lg text-gray-800">{source}</h3>
                  {reviews[source].map((review, index) => (
                    <div key={index} className="mt-2 p-4 border rounded-lg bg-gray-50">
                      <h4 className="font-bold text-gray-800">{review.name || 'Anonymous'}</h4>
                      <p className="text-gray-700 mt-1">{review.review}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {!loading && !summary && !error && Object.keys(reviews).length === 0 && (
            <p className="text-gray-500">Select an item to see reviews.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryInfo;