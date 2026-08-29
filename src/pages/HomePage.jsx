import React from 'react'
import AboutSection from '../components/AboutSection'
import CourseSection from '../components/CourseSection'
import DepartmentsSection from '../components/DepartmentsSection'
import AdmissionOverview from '../components/AdmissionOverview'
import ExcellenceSection from '../components/ExcellenceSection'
import RecognitionsSection from '../components/RecognitionsSection'
import CampusFacilities from '../components/CampusFacilities'
import RecognitionAffilliations from '../components/RecognitionAffiliations'
import NotificationsAdmissionSection from '../components/NotificationsAdmissionSection'
import ProgrammesCourses from '../components/ProgrammesCourses'
import StudentFeedback from '../components/StudentFeedback'
import Footer from '../components/Footer'



const HomePage = () => {
  return (
    <>
      <AboutSection/>
      <CourseSection/>  
      <DepartmentsSection/>
      <AdmissionOverview/>
      <ExcellenceSection/>
      <RecognitionsSection/>
      <CampusFacilities/>
      <RecognitionAffilliations/>
      <NotificationsAdmissionSection/>
      <ProgrammesCourses/>
      <StudentFeedback/>
      <Footer/>
    </>
  )
}

export default HomePage
