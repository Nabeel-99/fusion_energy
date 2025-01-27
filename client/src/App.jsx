import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Residentials from "./pages/ServiceDetails/Residentials";
import Consultation from "./pages/ServiceDetails/Consultation";
import Industrial from "./pages/ServiceDetails/Industrial";
import UtilityScale from "./pages/ServiceDetails/UtilityScale";
import HybridSolar from "./pages/ServiceDetails/HybridSolar";
import SolarWater from "./pages/ServiceDetails/SolarWater";
import SolarStreet from "./pages/ServiceDetails/SolarStreet";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className="flex flex-col  w-full h-full pt-20 lg:pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/residential-solar-installations"
            element={<Residentials />}
          />
          <Route
            path="/services/consultation-services"
            element={<Consultation />}
          />
          <Route
            path="/services/industrial-solar-installations"
            element={<Industrial />}
          />
          <Route
            path="/services/utility-scale-solar-projects"
            element={<UtilityScale />}
          />
          <Route
            path="/services/hybrid-solar-systems"
            element={<HybridSolar />}
          />
          <Route
            path="/services/solar-water-pumping-systems"
            element={<SolarWater />}
          />
          <Route
            path="/services/solar-street-lighting-and-mini-grids"
            element={<SolarStreet />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
