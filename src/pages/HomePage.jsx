import React from 'react'
import AboutSection from '../components/AboutSection'
import DepartmentsSection from '../components/DepartmentsSection'
import ExcellenceSection from '../components/ExcellenceSection'
import RecognitionsSection from '../components/RecognitionsSection'
import CampusFacilities from '../components/CampusFacilities'
import RecognitionAffilliations from '../components/RecognitionAffiliations'
import NotificationsAdmissionSection from '../components/NotificationsAdmissionSection'
import StudentFeedback from '../components/StudentFeedback'
import Footer from '../components/Footer'
import CoursesOffered from '../components/CoursesOffered'
import CollegeOverview from '../components/CollegeOverview'



const HomePage = () => {
  return (
    <>
      <AboutSection/>
      <CollegeOverview />
      <DepartmentsSection/>
      <CoursesOffered />
      <ExcellenceSection/>
      <RecognitionsSection/>
      <CampusFacilities/>
      <RecognitionAffilliations/>
      <NotificationsAdmissionSection/>
      <StudentFeedback/>
      <Footer/>
    </>
  )
}

export default HomePage
