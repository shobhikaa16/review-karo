import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

//react-icons is a library that provides popular icon packs like FontAwesome, Material Design, etc., as React components.
const HowWeHelp = () => {
  return (
    <div className="py-16 px-4 flex justify-center ">
      <div className="bg-green-200 shadow-lg rounded-lg  flex flex-col md:flex-row w-full max-w-6xl overflow-hidden min-h-[350px]">
        
        {/* Image Section */}
        <div className="md:w-1/3 p-10">
          <img 
            src="/Assets/collage.png" 
            alt="How We Help" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        
        {/* Content Section */}
        <div className="md:w-2/3 p-6 pt-10 flex flex-col justify-start space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Buyed a new Headphone, Cloth or want to search about a Medicine?</h2>
          <p className="text-gray-600">
            Make the right choice for what you bought or want to buy. We help you to find the best product for you.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Authentic product reviews from real users</li>
            <li>Compare multiple products in one place</li>
            <li>Easy-to-understand ratings and recommendations</li>
          </ul>

          {/* Social Media Icons & Sign Up Button Section */}
          <div className="flex items-center gap-10 mt-6  text-sm">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 text-gray-600">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:opacity-80 transition w-6 " />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl hover:opacity-80 transition w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:opacity-80 transition w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:opacity-80 transition w-6" />
              </a>
            </div>

            {/* Sign-Up Button */}
            <button className="bg-gray-800 text-white  font-bold px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
