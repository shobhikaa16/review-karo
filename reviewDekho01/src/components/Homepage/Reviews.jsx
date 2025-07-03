

const reviewsData = [
  { id: 1, name: "John Doe", review: "Amazing product, highly recommended!", rating: 5 },
  { id: 2, name: "Jane Smith", review: "Good quality, but delivery was late.", rating: 4 },
  { id: 3, name: "Alice Brown", review: "Not satisfied, expected better.", rating: 2 },
  { id: 4, name: "Michael Lee", review: "Worth every penny! Great value.", rating: 5 },
  { id: 5, name: "Sarah Wilson", review: "Decent product, but customer service was bad.", rating: 3 },
  { id: 6, name: "David Clark", review: "Superb! Exceeded my expectations.", rating: 5 },
  { id: 7, name: "Emma Johnson", review: "Not bad, but could be improved.", rating: 3 },
  { id: 8, name: "Daniel Martinez", review: "Loved it! Will buy again.", rating: 4 },
];

const Reviews = () => {
  return (
    <div className="py-12 px-4 bg-green-100 mt-10 mb-10">
      <h2 className="text-3xl font-bold ml-8 mb-8">Recent Reviews</h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-8">
        {reviewsData.map((review) => (
          <div key={review.id} className="bg-white w-74 h-50 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p className="text-gray-600 mt-2">{review.review}</p>
            <p className="mt-3 font-bold">⭐ {review.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
