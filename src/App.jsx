import React from 'react'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Memberz from './pages/Memberz'
import Albumz from './pages/Albumz'
import ShowZ from './pages/Showz'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" />
        <Route path="/memberz" element={<Memberz />} />
        <Route path="/albumz" element={<Albumz />} />
        <Route path="/showz" element={<ShowZ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
