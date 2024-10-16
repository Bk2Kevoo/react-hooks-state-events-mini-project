import React, { useState } from "react";

function CategoryFilter({ categories, onSelectedCategory, onHandleCategory }) {


  const buttonElements = categories.map((category) =>
    <button
      className={onSelectedCategory === category ? "selected" : ""}
      onClick={() => onHandleCategory(category)}
      key={category}>
      {category}

    </button>
  );

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}

export default CategoryFilter;


//when i click this button it should select the category
//then that category should be saved to state
//then that state should go to the app component
//then the app component should render the corresponding tasks