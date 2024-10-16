import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleRemove(text) {
    const newList = tasks.filter((task) => task.text !== text);
    setTasks(newList);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredCategoryDisplay = tasks
    .filter(task => {
      if (selectedCategory === "All") return true;

      return task.category === selectedCategory;
    })

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        onSelectedCategory={selectedCategory}
        onHandleCategory={handleCategoryChange}
      />

      <NewTaskForm categories={categories}
        onTaskFormSubmit={addTask} />

      <TaskList
        tasks={filteredCategoryDisplay}
        onRemove={handleRemove}
        onTaskFormSubmit={addTask}
      />

    </div>
  );
}

export default App;