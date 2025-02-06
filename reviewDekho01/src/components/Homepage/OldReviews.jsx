import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const reviews = [
  { id: 1, product: "Medicine A", snippet: "Great for headaches!", rating: 4.5 },
  { id: 2, product: "Medicine B", snippet: "Helped with my cold symptoms.", rating: 4.0 },
  { id: 3, product: "Medicine C", snippet: "Effective pain relief.", rating: 4.8 },
]

const OldReviews = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Link
              key={review.id}
              to={`/review/${review.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{review.product}</h3>
              <p className="text-gray-600 mb-4">{review.snippet}</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{review.rating.toFixed(1)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OldReviews

