import React from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
