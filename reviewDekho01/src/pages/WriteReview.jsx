import { useState } from "react";

const categories = ["Tablets", "Soaps", "Facewashes"];

const WriteReview = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    if (!selectedCategory || !reviewText.trim()) {
      alert("Please select a category and write a review.");
      return;
    }
    console.log("Review Submitted:", { category: selectedCategory, review: reviewText });
    alert("Review Posted Successfully!");
    setSelectedCategory("");
    setReviewText("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-bold text-center mb-4">Write a Review</h2>

        {/* Category Selection */}
        <select
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Review Message Box */}
        <textarea
          className="w-full h-28 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
