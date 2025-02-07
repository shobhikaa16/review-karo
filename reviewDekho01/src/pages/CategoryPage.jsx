import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// Dummy reviews for each product
const reviews = {
  tablets: [
    { username: "John", rating: 4, comment: "Great product!" },
    { username: "Alice", rating: 5, comment: "Worked well for me." },
  ],
  soaps: [
    { username: "Emma", rating: 3, comment: "Good, but not the best." },
    { username: "Sophia", rating: 4, comment: "Nice fragrance and moisturizing." },
  ],
  facewashes: [
    { username: "Liam", rating: 5, comment: "Leaves skin soft and clean." },
    { username: "Olivia", rating: 4, comment: "Good facewash, but a bit drying." },
  ],
  shampoos: [
    { username: "Ethan", rating: 4, comment: "Good shampoo, cleanses well." },
    { username: "Ava", rating: 5, comment: "Best shampoo I've used." },
  ],
};

const CategoryPage = () => {
  const { productId } = useParams();
  const productReviews = reviews[productId] || []; // Fetch the reviews for the selected product

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Reviews for {productId.charAt(0).toUpperCase() + productId.slice(1)}
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {productReviews.length > 0 ? (
          productReviews.map((review, index) => (
            <div key={index} className="mb-4">
              <div className="font-semibold">{review.username}</div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`${
                      review.rating > idx ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews available for this product.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
