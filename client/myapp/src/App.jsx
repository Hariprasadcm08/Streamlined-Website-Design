import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AdminPage from './Pages/AdminPage'
import ContactUsPage from './Pages/ContactUsPage'
import AboutPage from './Pages/AboutPage'
import DashBoardPage from './Pages/DashBoardPage'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/contactus' element={<ContactUsPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/dashboard' element={<DashBoardPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
