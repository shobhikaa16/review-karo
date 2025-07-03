// "use client";

// import { useState } from "react";
// import { Search } from "lucide-react";

// const Hero = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Search query:", searchQuery);
//   };

//   return (
//     <div className="bg-[url('https://images.unsplash.com/photo-1506840282530-b9c64366a95a')] bg-cover bg-gray-500 bg-center h-screen flex items-center justify-center text-white">
//       <div className="text-center space-y-8 p-4">
//         <h1 className="text-5xl md:text-6xl font-bold">Find Reviews the best suits your product</h1>
//         <p className="text-xl md:text-2xl max-w-2xl mx-auto">
//           Search and explore reviews for the products you need
//         </p>
//         <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
//           <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
//             <input
//               type="text"
//               placeholder="Search for medicines, brands, or categories..."
//               className="w-full py-4 px-6 text-black focus:outline-none"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type="submit" className="bg-green-600 p-4 hover:bg-green-700 transition duration-300">
//               <Search className="h-6 w-6 text-white" />
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import { useState } from 'react'; // react hook is imported
import { Search } from "lucide-react"; // icon is imported from lucide-react

// component declaration
const Hero = () => {

  // state management 1.state variable 2.state function
const [searchQuery, setSearchQuery] = useState("");

//Form Submission Handler
const handleSearch = (e) => {
  e.preventDefault();
  console.log("Search query:", searchQuery);
};


// this is jsx return ui layout
  return (
<div className="bg-[url('/assets/light-background.jpg')] bg-cover bg-center bg-[#fcfbf3] py-32 flex items-center justify-center ">
  <div className='text-center space-y-8 p-4'>
            <h1 className='text-5xl md:text-6xl font-bold text-black'>Reviews that  suits your product</h1>
            <p className='text-xl md:text-2xl text-black'>Search and explore reviews for the products you need</p>
            <form onSubmit={handleSearch} className='max-w-3xl mx-auto'>
              {/* now design this  search bar - making div for the search bar*/}
              <div className='flex items-center bg-white rounded-full overflow-hidden shadow-lg px-2'>
                <input type="text"
                  placeholder='Search company or Category'
                  className='w-full py-4 text-black focus:outline-none px-3'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}  //Updates the state every time user types
                  />
                  <button type="submit" className='bg-blue-500 p-3 hover:bg-blue-700 transition duration-300 rounded-full'>
                     <Search className='h-6 w-6 text-white '/>
                  </button>
              </div>
            </form>
        </div>
    </div>
  );
};

export default Hero;
// is searchquery is used by other compeonents then i acan  lift the state up to a common parent
//  or use a global state management solution like React Context or Redux. 