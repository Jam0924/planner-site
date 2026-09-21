import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className = "websiteContainer">
      <div className = "sidebarContainer">
        <p>sb</p>
      </div>

      <div className = "timeSizer">
        <div className = "timeContainer">
        <p> Time Container</p>
        </div>
      </div>

      <div className = "settingsContainer">
      <p> settings</p>
      </div>

      <div className = "scheduleContainer">
        <p> Schedule Container</p>

      </div>

      <div className = "toDoListSizer">
        <div className = "toDoListContainer">
          <div className = "toDoListItem">
            <p> To-Do List Container</p>
          </div>
          <div className = "toDoListItem">
            <p> To-Do List Container</p>
          </div>
          <div className = "toDoListItem">
            <p> To-Do List Container</p>
          </div>
        </div>
      </div>

      <div className = "timerContainer">
        <p> timer container</p>
      </div>

      <div className = "recordPlayerExtend">
        <p>rp</p>
      </div>
    </div>
  )
}

export default App
