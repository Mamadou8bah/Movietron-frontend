import { useState } from 'react'
import Navbar from './components/NavBar'
import SearchBar from './components/SearchBar'
import NotificationComponent from './components/NotificationComponent'
import LanguageComponent from './components/LanguageComponent'
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
        <div className="notification-component">
          <NotificationComponent />
        </div>

        <div className="language-componet">
          <LanguageComponent />
        </div>

       </div>
        <div className="content">
          
        </div>
      </div>
    </div>
  )
}

export default App
