import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskName, setTaskName] = useState("")
  const [taskCategory, setTaskCategory] = useState("All")

  const dropDownElements = categories.map((category) =>
    <option
      key={category}
      value={category}>
      {category}
    </option>
  );

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: taskName,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask)
  };

  return (
    <form
      className="new-task-form"
      onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)} />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={e => setTaskCategory(e.target.value)}>
          {dropDownElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;