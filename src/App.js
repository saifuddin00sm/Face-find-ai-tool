import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Footer } from "./components/Footer";
import { HomePage } from "./components/Pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/UI/Sidebar";
import "./App.css";
import "./responsive.css";
import { ResultPage } from "./components/Pages/ResultPage";
import { Routes, Route } from "react-router-dom";
import { TermsOfService } from "./components/Pages/TermsOfService";
import { PrivacyPolicy } from "./components/Pages/PrivacyPolicy";
import { GetFacesProvider } from "./context/getFacesContext";


ReactGA.initialize('G-7167EM6PPJ');

function App() {
  
useEffect(()=> {
  ReactGA.pageview(window.location.pathname + window.location.search);
}, []);


  return (
    <>
      <GetFacesProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="searchResults" element={<ResultPage />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </GetFacesProvider>
      {/* Scroll top button */}
      <span className="scrollto-top">
        <a href="#home">
          <i className="fas fa-angle-up"></i>
        </a>
      </span>
    </>
  );
}

export default App;
