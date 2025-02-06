import { Link } from "react-router-dom"
import { FaPills, FaPumpSoap, FaSprayCan } from "react-icons/fa"

const categories = [
  { name: "Tablets", icon: <FaPills />, path: "/category/tablets" },
  { name: "Soaps", icon: <FaPumpSoap />, path: "/category/soaps" },
  { name: "Facewashes", icon: <FaSprayCan />, path: "/category/facewashes" },
]

const MedicinalProducts = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Medicinal Product You Want to Search</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4 text-green-600">{category.icon}</div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MedicinalProducts

