import { Link } from "react-router-dom"

const categories = ["Tablets", "Soaps", "Facewashes"]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-600 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ReviewKaro
        </Link>
        <div className="space-x-4">
          <Link to="/write-review" className="hover:text-green-200">
            Write a Review
          </Link>
          {categories.map((category, index) => (
            <Link key={index} to={`/category/${category.toLowerCase()}`} className="hover:text-green-200">
              {category}
            </Link>
          ))}
          <Link to="/login" className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-100">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

