import React from "react";

import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import YoutubeSection from "../components/YoutubeSection"; // ✅ Add this

import DepartmentsSection from "../components/DepartmentsSection";
import ExcellenceSection from "../components/ExcellenceSection";
import RecognitionsSection from "../components/RecognitionsSection";
import CampusFacilities from "../components/CampusFacilities";
import CoursesOffered from "../components/CoursesOffered";
import CollegeOverview from "../components/CollegeOverview";
import VideoTestimonials from "../components/VideoTestimonials";

const HomePage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSlider />

      {/* HOME PAGE SECTIONS */}
      <AboutSection />

      {/* YOUTUBE VIDEO SECTION */}
      <YoutubeSection />

      <CollegeOverview />

      <DepartmentsSection />

      <CoursesOffered />

      <ExcellenceSection />

      <RecognitionsSection />

      <CampusFacilities />

      <VideoTestimonials />
    </>
  );
};

export default HomePage;