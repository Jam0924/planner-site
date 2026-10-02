import './DashboardToDo.css'
import { useState, useEffect } from 'react'


function DashboardToDo(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("api/task_data")
        .then((response) => response.json())
        .then((data) => {
            setTasks(data.tasks);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return(
        <>
        {tasks.map((task) => (
            <>
            <div className = "toDoListItem">
                <div className = "toDoListItemCheck">
                    <div className = "toDoListItemCheckIconHitbox">
                        <div className = "toDoListItemCheckIcon"></div>
                    </div>
                </div>
                <div>
                    <p className="toDoListItemTitleText">{task.title}</p>
                </div>
                <div className = "toDoListItemTagContainer">
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">{Date(task.date_due)}</p>
                    </div>
                    <div className = "toDoListItemRightTagBundle">
                        {task.tags.map((tag) => (
                            <div className = "toDoListItemTag">
                                <p className = "toDoListItemTagText">{tag}</p>
                            </div>
                        ))}
                        <div className = "toDoListItemTag toDoListItemExpand">
                            <p className = "toDoListItemTagText">Expand</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ))}


        </>
    )
}

export default DashboardToDo