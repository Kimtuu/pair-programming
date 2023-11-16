import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registeration } from "./components/Registeration";

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
    <Route path="/registeration" element={<Registeration />} />
    <Route path="*" element={<NotFound />} /> {/* Added this line for 404 */}
  </Routes>
</BrowserRouter>
  );
}

export default App;
