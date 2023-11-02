import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Features from './Feature'
import ErrorPage from './ErrorPage'

const App = () => {

  return  (
    <div>
      <BrowserRouter>
        <Routes>
          {/* "/menu" means "http://localhost:5173/menu" */}
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/features' element={<Features />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 
