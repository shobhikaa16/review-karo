import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Signup = () => {
  return (
    <div
      className="bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?community')" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
        <button className="bg-green-600 text-white px-8 py-3 rounded-md text-xl font-semibold hover:bg-green-700 transition-colors mb-8">
          Sign Up Now
        </button>
        <div className="flex justify-center space-x-6">
          <FaFacebook className="text-3xl cursor-pointer hover:text-green-400" />
          <FaTwitter className="text-3xl cursor-pointer hover:text-green-400" />
          <FaInstagram className="text-3xl cursor-pointer hover:text-green-400" />
        </div>
      </div>
    </div>
  )
}

export default Signup

