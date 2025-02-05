import { Search } from "lucide-react"
import ProductCard from "../../components/ProductCard"
import type React from "react" // Added import for React

export default function Category({ params }: { params: { category: string } }) {
  const { category } = params

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchQuery = formData.get("search")
    console.log("Search query:", searchQuery)
    // Navigate to search results page
    window.location.href = `/search?q=${searchQuery}&category=${category}`
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder={`Search for ${category}...`}
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </form>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Add dummy product cards here */}
          <ProductCard name="Product 1" icon="pill" />
          <ProductCard name="Product 2" icon="pill" />
          <ProductCard name="Product 3" icon="pill" />
          <ProductCard name="Product 4" icon="pill" />
        </div>
      </div>
    </div>
  )
}

