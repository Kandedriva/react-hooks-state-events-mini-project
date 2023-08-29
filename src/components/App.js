import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] =useState("All")
  const [tasks, setTasks] = useState(TASKS)

  const  handleDelete = (deletedTask)=>{ 
      const removeTask = tasks.filter((task)=>task !==deletedTask)
      setTasks(removeTask)
      console.log(removeTask)
    }

  const filteredCategories = tasks.filter((task)=>{
    if(selectedCategory === "All") return true;
    return task.category === selectedCategory
  })

  function handleClick(newCategory){
    setSelectedCategory(newCategory)
  }
  console.log(filteredCategories)

  const onTaskFormSubmit = (newTask)=>{
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryState={selectedCategory} handleClick={handleClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredCategories} handleDelete={handleDelete}  />
    </div>
  );
}

export default App;
