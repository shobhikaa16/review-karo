import React from "react";

const products = [
  { name: "Product 1", description: "Description of Product 1", price: "$10" },
  { name: "Product 2", description: "Description of Product 2", price: "$20" },
  { name: "Product 3", description: "Description of Product 3", price: "$30" },
  { name: "Product 4", description: "Description of Product 4", price: "$40" },
];

const MedicinalProducts = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Medicinal Products</h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-between gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg w-[320px] h-[380px] hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex justify-between items-center absolute bottom-6 left-6 right-6">
              <span className="font-bold text-green-600">{product.price}</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinalProducts;
