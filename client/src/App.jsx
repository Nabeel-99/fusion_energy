import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className="flex flex-col  w-full h-full pt-20 lg:pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
