import React from "react";

function Task({ taskObject }) {
  return (
    <div className="task">
      <div className="label">{taskObject.category}</div>
      <div className="text">{taskObject.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;