import React from "react";
import Task from "./Task"

function TaskList({ tasks }) {

  const mappedTasks = tasks.map((taskObject, index) => <Task key={index} taskObject={taskObject}/>)

  return (
    <div className="tasks">
      {mappedTasks}
    </div>
  );
}

export default TaskList;