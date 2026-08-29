import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <nav>
        <div>
          {/* <a href="home">home</a>
          <a href="about">About</a> */}
          <Link to='/'>Home</Link>
          <Link to='/about'>about</Link>
          <Link to='/contact'>contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        
      </Routes>
    </div>
  )
}

export default App
