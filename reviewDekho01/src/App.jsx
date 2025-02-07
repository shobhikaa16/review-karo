import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Header/Navbar"
import Home from "./pages/Home"
import CategoryPage from "./pages/CategoryPage"
import SearchResults from "./pages/SearchResults"
import ReviewDetails from "./pages/ReviewDetails"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./components/Footer/Footer"
import WriteReview from "./pages/WriteReview"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/review/:reviewId" element={<ReviewDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/write-review" element={<WriteReview />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

