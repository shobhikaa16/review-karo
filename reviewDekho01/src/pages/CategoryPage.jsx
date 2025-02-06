import { useParams } from "react-router-dom"

const CategoryPage = () => {
  const { categoryName } = useParams()

  return (
    <div className="container mx-auto py-16 pt-24">
      <h1 className="text-3xl font-bold mb-8 capitalize">{categoryName}</h1>
      {/* Add category-specific content here */}
      <p>This is the {categoryName} category page. Add product listings and search functionality here.</p>
    </div>
  )
}

export default CategoryPage

