import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ task, removeTask }) => {
  return (
    <div className="w-full shadow-md rounded-lg p-5 flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-[#3488bf]">
        To-Do List
      </h2>
      <ul className="w-full flex flex-col items-center justify-center">
        {task.length > 0 ? (
          task.map((task) => (
            <ToDoItem key={task.id} task={task} removeTask={removeTask} />
          ))
        ) : (
          <p className="text-[#3488bf] font-bold">
            No tasks yet. Add a new task!
          </p>
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
