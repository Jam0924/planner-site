import { useState, useEffect } from 'react'
import './App.css'
import DashboardToDo from './DashboardToDo.jsx'

function App() {
  return (
    <div className = "websiteContainer">
      <div className = "sidebarContainer">
        <p>sb</p>
      </div>

      <div className = "settingsContainer">
        <div className = "expandButton"></div>
        <div className = "settingsContainerRight">
          <div className = "loginButton"></div>
          <div className = "settingsButton"></div>
        </div>
      </div>

      <div className = "timeContainer">
        <div className = "timeObject"></div>
        <div className = "streakObject"></div>
        <div className = "dateObject"></div>
      </div>

      <div className = "toDoListContainer">
        <DashboardToDo></DashboardToDo>
      </div>

      <div className = "timerContainer">
        <div  className = "timerObject">
        </div>
        <div className = "timerConfig">

        </div>
      </div>


      <div className = "scheduleContainer">
        <p> Schedule Container</p>

      </div>

      <div className = "recordPlayerExtend">
        <p>rp</p>
      </div>
    </div>
  )
}

export default App
