import './DashboardToDo.css'

function DashboardToDo(){
    return(
        <>
        <div className = "toDoListItem">
            <div className = "toDoListItemCheck">
                <div className = "toDoListItemCheckIconHitbox">
                    <div className = "toDoListCheckIcon"></div>
                </div>
            </div>
            <div className="toDoListItemTitle">
                <p className = "toDoListItemTitleText">title title title title title title title title title title title</p></div>
            <div className="toDoListItemTagContainer">
                <div className = "toDoListItemTag">date</div>
                <div className = "rightTagBundle">
                    <div className = "toDoListItemTag">studying</div>
                    <div className = "toDoListItemTag">class</div>
                    <div className = "toDoListItemExpand">Expand V</div>
                </div>
            </div>
        </div>






        <div className = "toDoListItem">
            <p>ToDoList Item</p>
        </div>
        <div className = "toDoListItem">
            <p>ToDoList Item</p>
        </div>
        <div className = "toDoListItem">
            <p>ToDoList Item</p>
        </div>
          </>
    )
}

export default DashboardToDo