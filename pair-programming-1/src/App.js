import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
<BrowserRouter>
  <Navigation />
  <Routes>
    {/* Added other routes if you want*/}
    <Route path="/" element={<Hero />} />
    <Route path="/services" element={<Services />} />
    <Route path="/tours" element={<Tours />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} /> {/* Added this line for 404 */}
  </Routes>
</BrowserRouter>
  );
}

export default App;
