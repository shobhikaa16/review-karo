import Link from "next/link"
import { Pill, ChevronDown } from "lucide-react"
import { useState } from "react"

const categories = ["Tablets", "Soaps", "Facewashes", "Syrups", "Ointments", "Inhalers"]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-green-600 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Pill className="h-8 w-8" />
            <span className="text-2xl font-bold">ReviewKaro</span>
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/write-review" className="hover:text-green-200">
              Write a Review
            </Link>
            <div className="relative group">
              <button className="flex items-center hover:text-green-200" onClick={() => setIsOpen(!isOpen)}>
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/category/${category.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/login"
              className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition duration-300"
            >
              Login
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

