import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

/* =========================================================
   COMPONENTS
========================================================= */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./seo/SEO";

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
import NotFound from "./pages/NotFound";

const redirectRoutes = {
  "/about/mission-vision": "/about/vision-mission",
  "/about/director": "/about/director-message",
  "/about/chairman": "/about/director-message",
  "/about/principal": "/about/director-message",
  "/about/superintendent": "/about/director-message",
  "/about/objectives": "/about/vision-mission",
  "/academics/chairman": "/about/director-message",
  "/academics/director": "/about/director-message",
  "/academics/teaching-staff": "/faculty/teaching-staff",
  "/academics/non-teaching-staff": "/faculty/non-teaching-staff",
  "/facility": "/facilities",
  "/medical-camp": "/gallery/events",
  "/equipment": "/facilities",
  "/attendance": "/committee",
  "/hospital/opd-ipd-summary": "/hospital",
  "/admission": "/contact",
  "/admission/course-fees": "/contact",
  "/academics/syllabus": "/departments",
  "/courses/bams": "/departments",
  "/approvals": "/committee",
  "/career": "/contact",
  "/notification": "/committee",
  "/ncism-mandates": "/committee",
  "/ncism-mandates/permissions": "/committee",
  "/ncism-mandates/compliance": "/committee",
  "/ncism-mandates/reports": "/committee",
  "/ncism-mandates/college-council": "/committee",
  "/ncism-mandates/clinical-materials": "/committee",
  "/ncism-mandates/teaching-staff": "/faculty/teaching-staff",
  "/ncism-mandates/research-publication": "/committee",
  "/ncism-mandates/principal-information": "/about/director-message",
};

const App = () => {
  return (
    <>
      <SEO />

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

        <Route
          path="/departments/:departmentSlug"
          element={<Navigate to="/departments" replace />}
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

        {Object.entries(redirectRoutes).map(([path, to]) => (
          <Route
            key={path}
            path={path}
            element={<Navigate to={to} replace />}
          />
        ))}

        <Route
          path="*"
          element={<NotFound />}
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
