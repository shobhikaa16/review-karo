// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";

// // Example subcategories and products
// const subcategories = {
//   tablets: [
//     "Antibiotics",
//     "Antibacterial",
//     "Pain Relief",
//     "Vitamins",
//     "Cold & Cough",
//     "Diabetes",
//   ],
//   soaps: ["Medicated", "Antibacterial", "Moisturizing", "Herbal"],
//   facewashes: ["Acne Control", "Oil-Free", "Moisturizing", "Sensitive Skin"],
// };

// // Example products for each subcategory
// const products = {
//   antibiotics: [
//     { name: "Amoxicillin", description: "Effective for bacterial infections",  reviews: ["Great product!", "Effective and quick action."] },
//     { name: "Azithromycin", description: "Treats respiratory infections",  reviews: ["Works as expected.", "Helped me recover fast."] },
//   ],
//   antibacterial: [
//     { name: "Dettol Soap", description: "Kills 99.9% germs", reviews: ["Very hygienic.", "Leaves skin fresh and clean."] },
//     { name: "Savlon", description: "Antiseptic solution", reviews: ["Great for cuts and wounds.", "Works well for sanitizing."] },
//   ],
//   painRelief: [
//     { name: "Ibuprofen", description: "For pain relief and fever", reviews: ["Instant relief!", "I always use this for headaches."] },
//     { name: "Aspirin", description: "Painkiller and anti-inflammatory", reviews: ["Effective for joint pain.", "Great for fever control."] },
//   ],
//   // Add more products for other subcategories here...
// };

// const CategoryPage = () => {
//   const { categoryName } = useParams();
//   const [selectedSubcategory, setSelectedSubcategory] = useState("");
//   const [currentProducts, setCurrentProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleSubcategoryClick = (subcategory) => {
//     setSelectedSubcategory(subcategory);
//     setCurrentProducts(products[subcategory.toLowerCase()] || []);
//     setSelectedProduct(null);  // Reset selected product when switching subcategory
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);  // Set the product to show reviews
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white text-black h-full p-6 flex flex-col space-y-6 overflow-y-auto border-r border-gray-300">
//         <h3 className="text-xl font-semibold mb-4">Subcategories</h3>
//         <ul>
//           {subcategories[categoryName]?.map((subcategory) => (
//             <li key={subcategory} className="mb-2">
//               <button
//                 className="text-black w-full text-left py-2 px-4 rounded-md hover:bg-green-600 hover:text-white transition duration-300"
//                 onClick={() => handleSubcategoryClick(subcategory)}
//               >
//                 {subcategory}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4 p-8 bg-gray-100 flex flex-col flex-grow">
//         {/* Title */}
//         <h2 className="text-3xl font-bold mb-4">Products in {selectedSubcategory || "Select a Subcategory"}</h2>
        
//         {/* Product List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {currentProducts.length > 0 ? (
//             currentProducts.map((product, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={() => handleProductClick(product)}>
//                 <h3 className="text-xl font-semibold">{product.name}</h3>
//                 <p className="text-gray-600">{product.description}</p>
//                 <div className="flex justify-between mt-4">
//                   <span className="text-green-600">{product.price}</span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No products available for this subcategory.</p>
//           )}
//         </div>

//         {/* Product Reviews */}
//         {selectedProduct && (
//           <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4">Reviews for {selectedProduct.name}</h3>
//             <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
//             <div className="space-y-4">
//               {selectedProduct.reviews.map((review, index) => (
//                 <div key={index} className="border-t border-gray-300 pt-2">
//                   <p className="text-gray-800">{review}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
