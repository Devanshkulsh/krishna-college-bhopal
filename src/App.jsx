import React from "react";
import { Routes, Route } from "react-router-dom";

/* =========================================================
   COMPONENTS
========================================================= */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* =========================================================
   HOME
========================================================= */

import HomePage from "./pages/HomePage";

/* =========================================================
   ABOUT
========================================================= */

import About from "./pages/About";
import Director from "./pages/Director";
import VisionMission from "./pages/VisionMission";

/* =========================================================
   DEPARTMENTS
========================================================= */

import Departments from "./pages/Departments";

/* =========================================================
   FACULTY
========================================================= */

import Faculty from "./pages/Faculty";
import TeachingStaff from "./pages/TeachingStaff";
import NonTeachingStaff from "./pages/NonTeachingStaff";
import HospitalStaff from "./pages/HospitalStaff";

/* =========================================================
   HOSPITAL
========================================================= */

import Hospital from "./pages/Hospital";

/* =========================================================
   FACILITIES
========================================================= */

import Facilities from "./pages/Facilities";

/* =========================================================
   COMMITTEE
========================================================= */

import Committee from "./pages/Committee";

/* =========================================================
   GALLERY
========================================================= */

import Gallery from "./pages/Gallery";
import CampusGallery from "./pages/CampusGallery";

/* =========================================================
   CONTACT
========================================================= */

import Contact from "./pages/Contact";

/* =========================================================
   APP
========================================================= */
import EventsGallery from "./pages/EventsGallery";
import HospitalGallery from "./pages/HospitalGallery";
const App = () => {
  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          ROUTES
      ====================================================== */}

      <Routes>

        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* =================================================
            ABOUT
        ================================================= */}

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/about/college"
          element={<About />}
        />

        <Route
          path="/about/director-message"
          element={<Director />}
        />

        <Route
          path="/about/vision-mission"
          element={<VisionMission />}
        />


        {/* =================================================
            DEPARTMENTS
        ================================================= */}

        <Route
          path="/departments"
          element={<Departments />}
        />


        {/* =================================================
            FACULTY
        ================================================= */}

        <Route
          path="/faculty"
          element={<Faculty />}
        />

        <Route
          path="/faculty/teaching-staff"
          element={<TeachingStaff />}
        />

        <Route
          path="/faculty/non-teaching-staff"
          element={<NonTeachingStaff />}
        />

        <Route
          path="/faculty/hospital-staff"
          element={<HospitalStaff />}
        />


        {/* =================================================
            HOSPITAL
        ================================================= */}

        <Route
          path="/hospital"
          element={<Hospital />}
        />


        {/* =================================================
            FACILITIES
        ================================================= */}

        <Route
          path="/facilities"
          element={<Facilities />}
        />


        {/* =================================================
            COMMITTEE
        ================================================= */}

        <Route
          path="/committee"
          element={<Committee />}
        />


        {/* ================= GALLERY ================= */}

<Route
  path="/gallery"
  element={<Gallery />}
/>

<Route
  path="/gallery/campus"
  element={<CampusGallery />}
/>

<Route
  path="/gallery/events"
  element={<EventsGallery />}
/>

<Route
  path="/gallery/hospital"
  element={<HospitalGallery />}
/>

        {/* =================================================
            CONTACT
        ================================================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </>
  );
};

export default App;