import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsOfUsePage from "./Pages/TermsOfUsePage";
import Footer from "./components/Footer";
import About from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
