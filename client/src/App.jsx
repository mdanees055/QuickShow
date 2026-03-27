import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from "./pages/Home"
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookingss from './pages/MyBookingss'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const isAdminRoute= useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
      {!isAdminRoute && <Navbar/>}

      <Routes>
        <Route path='/' elemenet ={<Home/>} />
        <Route path='/Movies' elemenet ={<Movies/>} />
        <Route path='/movies/:id' elemenet ={<MovieDetails/>} />
        <Route path='/movies/:id/:date' elemenet ={<SeatLayout/>} />
        <Route path='/my-bookings' elemenet ={<MyBookingss/>} />
        <Route path='/favorite' elemenet ={<Favorite/>} />
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
