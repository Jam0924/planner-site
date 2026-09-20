import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <div className = "websiteContainer">

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
          <p> To-Do List Container</p>
        </div>
      </div>

      <div className = "timerContainer">
        <p> timer container</p>
      </div>
    </div>
    </>
  )
}

export default App
