import React from "react";

function CategoryFilter({ categories, handleCategorySelection, selectedCategory }) {

  const categoryBtn = categories.map((category, index) => (
    <button key={category} className={selectedCategory === category ? "selected" : ""} onClick={() => handleCategorySelection(category)}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
    </div>
  );
}

export default CategoryFilter;