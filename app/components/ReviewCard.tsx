import Link from "next/link"
import { Star } from "lucide-react"

type ReviewCardProps = {
  id: string
  productName: string
  reviewSnippet: string
  rating: number
}

export default function ReviewCard({ id, productName, reviewSnippet, rating }: ReviewCardProps) {
  return (
    <Link href={`/review/${id}`}>
      <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">{productName}</h3>
        <p className="text-gray-600 mb-4">{reviewSnippet}</p>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="font-bold">{rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  )
}

