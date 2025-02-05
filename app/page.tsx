import Link from "next/link"
import { Search, Facebook, Twitter, Instagram } from "lucide-react"
import ProductCard from "./components/ProductCard"
import ReviewCard from "./components/ReviewCard"
import Navbar from "./components/Navbar"
import type React from "react" // Added import for React

export default function Home() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchQuery = formData.get("search")
    console.log("Search query:", searchQuery)
    // Navigate to search results page
    window.location.href = `/search?q=${searchQuery}`
  }

  return (
    <main className="min-h-screen bg-white pt-16">
      <Navbar /> {/* Added Navbar component */}
      {/* Hero Section */}
      <div className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Find Reviews for Medicines</h1>
          <p className="text-xl text-white mb-8">Search and explore reviews for the medicinal products you need</p>
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Search for medicines, brands, or categories..."
                className="w-full py-3 px-4 pr-10 rounded-full text-black"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Product Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Medicinal Product You Want to Search</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard name="Tablets" icon="pill" />
          <ProductCard name="Soaps" icon="droplet" />
          <ProductCard name="Facewashes" icon="sparkles" />
          <ProductCard name="Syrups" icon="flask" />
          <ProductCard name="Ointments" icon="tube" />
          <ProductCard name="Inhalers" icon="wind" />
        </div>
      </div>
      {/* Reviews Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Recent Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard id="1" productName="Paracetamol" reviewSnippet="Great for headaches!" rating={4.5} />
            <ReviewCard id="2" productName="Cetaphil Cleanser" reviewSnippet="Gentle on skin" rating={5} />
            <ReviewCard id="3" productName="Vitamin C Serum" reviewSnippet="Noticeable difference" rating={4} />
            <ReviewCard id="4" productName="Asthma Inhaler" reviewSnippet="Works quickly" rating={4.5} />
            <ReviewCard id="5" productName="Antibiotic Cream" reviewSnippet="Healed infection fast" rating={5} />
            <ReviewCard id="6" productName="Allergy Tablets" reviewSnippet="Effective relief" rating={4} />
          </div>
        </div>
      </div>
      {/* Signup Section */}
      <div className="relative bg-[url('/signup-bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
          <Link
            href="/signup"
            className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
          >
            Sign Up Now
          </Link>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="#" className="text-white hover:text-green-200">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-green-200">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-green-200">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

