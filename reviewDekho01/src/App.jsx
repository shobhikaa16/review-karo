import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home";
import Medicines from "./Pages/Medicines";
import MedInfoOne from "./Pages/MedInfoOne"; // already imported ✅

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
            {/* ONE dynamic route for all medicine types: */}
            <Route
              path="/category/medicines/:categoryName"
              element={<MedInfoOne />}
            />
            <Route
              path="/category/medicines/:categoryName/:tabletName"
              element={<MedInfoOne />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
