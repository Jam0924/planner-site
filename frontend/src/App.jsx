import { useState, useEffect } from 'react'
import './App.css'
import DashboardToDo from './DashboardToDo.jsx'

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("api/task_data")
      .then((response) => response.json())
      .then((data) => {
        setData(data.message);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
        <div className = "timeObject">{data}</div>
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
