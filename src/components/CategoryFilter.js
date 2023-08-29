import React from "react";

function CategoryFilter({categories, categoryState, handleClick}) {
  const buttonClass = categories.map((category)=>(
    <button key={category} className ={categoryState===category? "selected" : null} onClick={()=>handleClick(category)}>{category} </button>))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {   buttonClass   /* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
