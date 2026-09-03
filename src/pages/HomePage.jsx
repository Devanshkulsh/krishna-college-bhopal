import React from "react";

import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import DepartmentsSection from "../components/DepartmentsSection";
import ExcellenceSection from "../components/ExcellenceSection";
import RecognitionsSection from "../components/RecognitionsSection";
import CampusFacilities from "../components/CampusFacilities";
import StudentFeedback from "../components/StudentFeedback";
import CoursesOffered from "../components/CoursesOffered";
import CollegeOverview from "../components/CollegeOverview";

const HomePage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSlider />

      {/* HOME PAGE SECTIONS */}
      <AboutSection />

      <CollegeOverview />

      <DepartmentsSection />

      <CoursesOffered />

      <ExcellenceSection />

      <RecognitionsSection />

      <CampusFacilities />

      <StudentFeedback />
    </>
  );
};

export default HomePage;