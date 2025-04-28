import React from "react";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Aboutme from "./Components/Aboutme";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
      <div className=" max-w-screen-2xl mx-auto overflow-hidden">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<Aboutme />} />
        </Routes>
        <Footer/>
      </div>
    
  );
};

export default App;
