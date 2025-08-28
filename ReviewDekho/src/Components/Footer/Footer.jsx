import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="p-10 text-gray-800 bg-green-300 mt-10">
      <Link to="/" className="text-2xl font-bold">
        ReviewDekho
      </Link>

      <div className="mt-10 flex flex-row space-x-30 flex justify-center items-center">
        <div className="">
          <p className="text-md font-bold mb-5">About</p>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Job</li>
            <li>Contact</li>
            <li>How we work</li>
          </ul>
        </div>

        <div>
          <p className="text-md font-bold mb-5">Community</p>
          <ul className="space-y-2">
            <li>Trust in reviews</li>
            <li>Help center</li>
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
        </div>

        <div>
          <p className="text-md font-bold mb-5">Businesses</p>
          <ul className="space-y-2">
            <li>Products</li>
            <li>Plans & pricing</li>
            <li>Business login</li>
            <li>Blogs for business</li>
          </ul>
        </div>

        <div>
          <p className="text-md font-bold mb-5">Follow us on</p>
          <ul className="space-y-2 ml-10">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:opacity-80 transition w-6" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl hover:opacity-80 transition w-6" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:opacity-80 transition w-6" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:opacity-80 transition w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
