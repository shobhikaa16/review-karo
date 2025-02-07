import { Link } from "react-router-dom";
import { FaPills, FaPumpSoap, FaSprayCan } from "react-icons/fa";
import { FaStar } from "react-icons/fa"; // Importing a star icon for the rating

const categories = [
  { name: "Tablets", icon: <FaPills />, path: "/category/tablets", rating: 4.2 },
  { name: "Soaps", icon: <FaPumpSoap />, path: "/category/soaps", rating: 3.8 },
  { name: "Facewashes", icon: <FaSprayCan />, path: "/category/facewashes", rating: 4.5 },
  { name: "Shampoos", icon: <FaSprayCan />, path: "/category/shampoos", rating: 4.0 }, // Added a 4th category
];

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
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>

            {/* Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`${
                    category.rating > idx ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm">{category.rating}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MedicinalProducts;
