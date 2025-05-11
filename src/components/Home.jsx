import React from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Hero } from "./hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <Router>
      <Hero />
      </Router>
      
    </div>
  );
};
