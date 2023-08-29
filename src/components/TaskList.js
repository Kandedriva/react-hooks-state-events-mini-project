import React from "react";
import Task from "./Task"

function TaskList({handleDelete, tasks}) {

  
   
  return (
    <div className="tasks">
      {tasks.map((task, index)=>(<Task key={index} category={task.category} text={task.text} onDelete={()=>handleDelete(task)} >{task} </Task>))     /* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
