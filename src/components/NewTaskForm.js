import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [category, setCategory] = useState("code")
  const [text, setTextl] = useState("")

  const categoriesToDisplay = categories.filter((categoryToDisplay)=>(categoryToDisplay !=="All"));

  function handleSubmit(event){
    event.preventDefault()
    const newTask = {
      category,
      text
    }
    onTaskFormSubmit(newTask) 
    setCategory("code");
    setTextl("")
   
  }
  
  function handleCategory(event){
    setCategory(event.target.value)
  }

  function handleText(event){
    setTextl(event.target.value) 
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={handleText} 
        value={text} />
      </label>
      <label>
        Category
        <select name="category" 
        onChange ={handleCategory} 
        value={category} >
          {categoriesToDisplay.map((displedCategory)=>(<option key={displedCategory} >{displedCategory} </option>)) /* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
