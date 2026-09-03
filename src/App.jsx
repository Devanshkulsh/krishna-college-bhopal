import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Director from "./pages/Director";

const App = () => {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= ROUTES ================= */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/about/college"
          element={<About />}
        />

        {/* DIRECTOR MESSAGE */}

        <Route
          path="/about/director-message"
          element={<Director />}
        />

      </Routes>

      {/* ================= FOOTER ================= */}

      <Footer />
    </>
  );
};

export default App;