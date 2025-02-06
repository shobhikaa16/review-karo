import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">ReviewKaro</h3>
          <p>Your trusted source for medicine reviews</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li>
              <Link to="/about" className="hover:text-green-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-green-200">
                Community
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-green-200">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-green-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-xl font-semibold mb-4">Follow Us On</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-200">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:text-green-200">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-green-200">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

