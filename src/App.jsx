import { useState } from 'react'
import Navbar from './components/NavBar'
import HomePageComponent from './components/HomePageComponent'
import './App.css'

import ProfileComponent from './components/ProfileComponent'
function App() {
  return (
    <div className="app-content">
       <div className="nav-bar">
        <Navbar />
       </div>
       <div>
        <HomePageComponent />
       </div>

      
    </div>
  )
}

export default App
