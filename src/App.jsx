import { useState } from 'react'
import Navbar from './components/NavBar'
import SearchBar from './components/SearchBar'
import './App.css'

import ProfileComponent from './components/ProfileComponent'
function App() {
  

  return (
    <div className="app-content">
       <div className="nav-bar">
        <Navbar />
       </div>

       
      <div className="main-content">
       <div className="top-part">
         <div className="profile-component">
        <ProfileComponent/>

       </div>
        <div className="searchBar">
          <SearchBar />
        </div>
       </div>
        <div className="content">
          
        </div>
      </div>
    </div>
  )
}

export default App
