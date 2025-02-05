import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">ReviewKaro</h3>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <Link href="/about" className="hover:text-green-200 mx-3">
              About
            </Link>
            <Link href="/community" className="hover:text-green-200 mx-3">
              Community
            </Link>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="font-semibold mb-2">Follow Us On</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="#" className="hover:text-green-200">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-green-200">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-green-200">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

