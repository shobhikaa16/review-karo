import { useLocation } from "react-router-dom"

const SearchResults = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get("q")

  return (
    <div className="container mx-auto py-16 pt-24">
      <h1 className="text-3xl font-bold mb-8">Search Results for: {query}</h1>
      {/* Add search results content here */}
      <p>Display search results for "{query}" here.</p>
    </div>
  )
}

export default SearchResults

