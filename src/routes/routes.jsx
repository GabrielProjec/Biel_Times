import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";

// PAGES
import Home from "../pages/Home";
import Sports from "../pages/Sports";
import Business from "../pages/Business";
import Entertainment from "../pages/Entertainment";
import Health from "../pages/Health";
import Science from "../pages/Science";
import Technology from "../pages/Technology";

function routes() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/techonology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default routes;
