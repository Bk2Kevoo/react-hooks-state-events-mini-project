import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleCategorySelection = (categoryName) => {
    setSelectedCategory(categoryName)
  }

  const filteredTasks = TASKS.filter(task => selectedCategory === "All" || task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategorySelection={handleCategorySelection} selectedCategory={selectedCategory} />
      <NewTaskForm />
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;