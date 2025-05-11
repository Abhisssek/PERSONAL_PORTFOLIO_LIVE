import React from "react";
import "./Hero.css";
import { Navbar } from "../navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "../about/About";
import { Resume } from "../resume/Resume";
import { Portfolio } from "../portfolio/Portfolio";
import { Contact } from "../contact/Contact";

export const Hero = () => {
  return (
    <div className="hero">
      
      <div >
        <Navbar />

        {/* Main Content */}
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    
    </div>
  );
};
