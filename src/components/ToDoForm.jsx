import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Add new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-[#012f47] p-2 sm:p-3 mb-2 rounded w-full text-white font-semibold focus:outline-2 focus:outline-[#079eef]"
      />
      <button className="mt-2 bg-[#012f47] text-white p-2 sm:p-3 rounded w-full hover:bg-[#079eef] cursor-pointer">
        Add task
      </button>
    </form>
  );
};

export default ToDoForm;
