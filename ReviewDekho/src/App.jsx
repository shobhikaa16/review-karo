import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home";
import Medicines from "./Pages/Medicines";
import CategoryInfo from "./Pages/CategoryInfo"; // <-- Import the dynamic page

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Spacer to offset fixed navbar height */}
        <div className="h-[100px]" />

        {/* Main scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/medicines" element={<Medicines />} />
            {/* Dynamic route for ALL categories */}
            <Route path="/category/:category" element={<CategoryInfo />} />
            {/* Optional: Dynamic route for item details (if you want to support it) */}
            <Route path="/category/:category/:itemName" element={<CategoryInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;